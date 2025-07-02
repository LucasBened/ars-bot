import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import fetch from "node-fetch";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Interface para resultado de busca web
interface WebSearchResult {
  found: boolean;
  content?: string;
  url?: string;
  error?: string;
}

interface EmpresaData {
  identificacao: any;
  institucional: any;
  mercado: any;
}

interface ProdutosData {
  categorias: any;
}

interface CertificacoesData {
  descricao: string;
  nacionais: any[];
  internacionais: any[];
  gestao: any[];
}

interface AplicacoesData {
  frequencias: any;
  aplicacoes: any;
  tecnologias: any;
}

interface ConectoresData {
  serieN: any[];
  serieBNC: any[];
  serieUHF: any[];
  serieTNC: any[];
  serieFakra: any[];
}

interface AplicacoesSegmentosData {
  segurancaPublica: any;
  utilities: any;
  agronegocioRTK: any;
  mineracaoIndustria: any;
  lteIoT: any;
}

interface GlossarioData {
  termosRF: any;
  equipamentos: any;
  medidas: any;
  antenas: any;
  conectores: any;
}

interface AnaliseEstrategicaData {
  mercado: any;
  aplicacoesPorSegmento: any;
}

class DataManager {
  private empresa: EmpresaData;
  private produtos: ProdutosData;
  private certificacoes: CertificacoesData;
  private aplicacoes: AplicacoesData;
  private conectores: ConectoresData;
  private aplicacoesSegmentos: AplicacoesSegmentosData;
  private glossario: GlossarioData;
  private analiseEstrategica: AnaliseEstrategicaData;
  private webSearchEnabled: boolean = true;

  constructor() {
    this.loadData();
  }
  private loadData() {
    try {
      const dataPath = path.join(__dirname);

      this.empresa = JSON.parse(
        fs.readFileSync(path.join(dataPath, "empresa.json"), "utf-8")
      );

      this.produtos = JSON.parse(
        fs.readFileSync(path.join(dataPath, "produtos.json"), "utf-8")
      );

      this.certificacoes = JSON.parse(
        fs.readFileSync(path.join(dataPath, "certificacoes.json"), "utf-8")
      );

      this.aplicacoes = JSON.parse(
        fs.readFileSync(path.join(dataPath, "aplicacoes.json"), "utf-8")
      );

      this.conectores = JSON.parse(
        fs.readFileSync(
          path.join(dataPath, "conectores-completos.json"),
          "utf-8"
        )
      );

      this.aplicacoesSegmentos = JSON.parse(
        fs.readFileSync(
          path.join(dataPath, "aplicacoes-segmentos.json"),
          "utf-8"
        )
      );

      this.glossario = JSON.parse(
        fs.readFileSync(path.join(dataPath, "glossario-tecnico.json"), "utf-8")
      );

      this.analiseEstrategica = JSON.parse(
        fs.readFileSync(
          path.join(dataPath, "analise-estrategica.json"),
          "utf-8"
        )
      );
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      throw new Error("Failed to load data files");
    }
  }

  // Métodos para buscar informações específicas
  getEmpresaInfo() {
    return this.empresa;
  }

  getProdutosByCategoria(categoria: string) {
    return this.produtos.categorias[categoria] || null;
  }

  getAllProdutos() {
    return this.produtos.categorias;
  }

  getCertificacoes() {
    return this.certificacoes;
  }

  getAplicacoes() {
    return this.aplicacoes;
  }

  getConectores() {
    return this.conectores;
  }

  getAplicacoesSegmentos() {
    return this.aplicacoesSegmentos;
  }

  getGlossario() {
    return this.glossario;
  }

  getAnaliseEstrategica() {
    return this.analiseEstrategica;
  }

  getFrequenciaInfo(frequencia: string) {
    // Busca informações sobre uma faixa de frequência específica
    const freq = frequencia.toLowerCase();
    if (freq.includes("vhf") || freq.includes("136") || freq.includes("174")) {
      return this.aplicacoes.frequencias.vhf;
    }
    if (freq.includes("uhf") || freq.includes("380") || freq.includes("512")) {
      return this.aplicacoes.frequencias.uhf;
    }
    if (freq.includes("lte") || freq.includes("698") || freq.includes("806")) {
      return this.aplicacoes.frequencias.lte;
    }
    return null;
  }

  getConectorPorSerie(serie: string) {
    return (
      this.conectores[serie + "Serie"] ||
      this.conectores["serie" + serie] ||
      null
    );
  }

  // Método para buscar informações relevantes baseado na mensagem
  buscarInformacoesRelevantes(mensagem: string): string {
    const mensagemLower = mensagem.toLowerCase();
    let informacoes: string[] = [];

    // Busca por informações da empresa
    if (
      mensagemLower.includes("empresa") ||
      mensagemLower.includes("história") ||
      mensagemLower.includes("historia") ||
      mensagemLower.includes("sobre") ||
      mensagemLower.includes("ars eletronica") ||
      mensagemLower.includes("fundação") ||
      mensagemLower.includes("missão") ||
      mensagemLower.includes("visão") ||
      mensagemLower.includes("valores")
    ) {
      informacoes.push("=== INFORMAÇÕES DA EMPRESA ===");
      informacoes.push(JSON.stringify(this.empresa, null, 2));
    }

    // Busca por certificações
    if (
      mensagemLower.includes("certificação") ||
      mensagemLower.includes("certificacao") ||
      mensagemLower.includes("certificacoes") ||
      mensagemLower.includes("certificações") ||
      mensagemLower.includes("certificados") ||
      mensagemLower.includes("certificado") ||
      mensagemLower.includes("anatel") ||
      mensagemLower.includes("iso") ||
      mensagemLower.includes("homologação") ||
      mensagemLower.includes("homologacao") ||
      mensagemLower.includes("homologações") ||
      mensagemLower.includes("homologacoes") ||
      mensagemLower.includes("fcc") ||
      mensagemLower.includes("inmetro") ||
      mensagemLower.includes("normas") ||
      mensagemLower.includes("norma") ||
      mensagemLower.includes("qualidade") ||
      mensagemLower.includes("conformidade") ||
      mensagemLower.includes("rohs") ||
      mensagemLower.includes("ce mark") ||
      mensagemLower.includes("padrões") ||
      mensagemLower.includes("padroes")
    ) {
      informacoes.push("=== CERTIFICAÇÕES ===");
      informacoes.push(JSON.stringify(this.certificacoes, null, 2));
    }

    // Busca por conectores específicos
    if (
      mensagemLower.includes("conector") ||
      mensagemLower.includes("série n") ||
      mensagemLower.includes("serie n") ||
      mensagemLower.includes("bnc") ||
      mensagemLower.includes("uhf") ||
      mensagemLower.includes("tnc") ||
      mensagemLower.includes("fakra") ||
      mensagemLower.includes("sma")
    ) {
      informacoes.push("=== CONECTORES ===");
      informacoes.push(JSON.stringify(this.conectores, null, 2));
    }

    // Busca por aplicações e segmentos
    if (
      mensagemLower.includes("segurança") ||
      mensagemLower.includes("seguranca") ||
      mensagemLower.includes("policia") ||
      mensagemLower.includes("bombeiro") ||
      mensagemLower.includes("utilities") ||
      mensagemLower.includes("industria") ||
      mensagemLower.includes("industrial") ||
      mensagemLower.includes("agronegócio") ||
      mensagemLower.includes("agronegocio") ||
      mensagemLower.includes("mineração") ||
      mensagemLower.includes("mineracao") ||
      mensagemLower.includes("iot") ||
      mensagemLower.includes("lte")
    ) {
      informacoes.push("=== APLICAÇÕES POR SEGMENTO ===");
      informacoes.push(JSON.stringify(this.aplicacoesSegmentos, null, 2));
    }

    // Busca por termos técnicos e glossário
    if (
      mensagemLower.includes("vswr") ||
      mensagemLower.includes("roe") ||
      mensagemLower.includes("dbi") ||
      mensagemLower.includes("dbm") ||
      mensagemLower.includes("impedância") ||
      mensagemLower.includes("impedancia") ||
      mensagemLower.includes("ganho") ||
      mensagemLower.includes("polarização") ||
      mensagemLower.includes("polarizacao") ||
      mensagemLower.includes("o que é") ||
      mensagemLower.includes("o que e") ||
      mensagemLower.includes("definição") ||
      mensagemLower.includes("definicao") ||
      mensagemLower.includes("significado")
    ) {
      informacoes.push("=== GLOSSÁRIO TÉCNICO ===");
      informacoes.push(JSON.stringify(this.glossario, null, 2));
    }

    // Busca por análise de mercado
    if (
      mensagemLower.includes("mercado") ||
      mensagemLower.includes("concorrente") ||
      mensagemLower.includes("competição") ||
      mensagemLower.includes("competicao") ||
      mensagemLower.includes("diferencial") ||
      mensagemLower.includes("posicionamento") ||
      mensagemLower.includes("estratégia") ||
      mensagemLower.includes("estrategia")
    ) {
      informacoes.push("=== ANÁLISE ESTRATÉGICA ===");
      informacoes.push(JSON.stringify(this.analiseEstrategica, null, 2));
    }

    // Busca por frequências específicas
    if (
      mensagemLower.includes("vhf") ||
      mensagemLower.includes("uhf") ||
      mensagemLower.includes("frequencia") ||
      mensagemLower.includes("frequência") ||
      mensagemLower.includes("mhz") ||
      mensagemLower.includes("ghz") ||
      mensagemLower.includes("banda")
    ) {
      informacoes.push("=== INFORMAÇÕES DE FREQUÊNCIA ===");
      informacoes.push(JSON.stringify(this.aplicacoes.frequencias, null, 2));
    }

    // Busca por produtos específicos
    const categorias = ["antena", "duplexador", "cabo", "combinador"];
    categorias.forEach((categoria) => {
      if (mensagemLower.includes(categoria)) {
        const produtoInfo =
          this.produtos[categoria + "s"] || this.produtos[categoria];
        if (produtoInfo) {
          informacoes.push(`=== ${categoria.toUpperCase()}S ===`);
          informacoes.push(JSON.stringify(produtoInfo, null, 2));
        }
      }
    });

    // Se solicitou catálogo completo
    if (
      mensagemLower.includes("catálogo") ||
      mensagemLower.includes("catalogo") ||
      mensagemLower.includes("lista") ||
      mensagemLower.includes("listagem") ||
      mensagemLower.includes("todos os produtos") ||
      mensagemLower.includes("produtos disponíveis") ||
      mensagemLower.includes("produtos disponiveis")
    ) {
      informacoes.push("=== CATÁLOGO COMPLETO ===");
      informacoes.push(JSON.stringify(this.produtos, null, 2));
    }

    // Se não encontrou nada específico, retorna informações gerais
    if (informacoes.length === 0) {
      informacoes.push("=== INFORMAÇÕES GERAIS ===");
      informacoes.push(JSON.stringify(this.empresa.mercado, null, 2));
      informacoes.push("=== PRODUTOS PRINCIPAIS ===");
      informacoes.push(JSON.stringify(this.produtos, null, 2));
    }

    return informacoes.join("\n\n");
  }

  // Método para buscar no site da ARS Eletrônica
  private async searchWebsite(query: string): Promise<WebSearchResult> {
    try {
      // Tentar diferentes URLs para busca mais completa
      const searchUrls = [
        "https://arseletronica.com.br",
        "https://arseletronica.com.br/solucoes/",
        "https://arseletronica.com.br/produtos/",
      ];

      let allContent = "";
      let foundAny = false;

      for (const searchUrl of searchUrls) {
        try {
          const response = await fetch(searchUrl);
          if (response.ok) {
            const html = await response.text();
            const content = this.extractRelevantContent(html, query);
            if (content.length > 0) {
              allContent += content + " ";
              foundAny = true;
            }
          }
        } catch (error) {
          console.warn(`Erro ao buscar ${searchUrl}:`, error);
          // Continua com próxima URL
        }
      }

      return {
        found: foundAny,
        content: allContent.trim(),
        url: "https://arseletronica.com.br",
      };
    } catch (error) {
      console.error("Erro na busca web:", error);
      return {
        found: false,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      };
    }
  }

  // Método para busca web específica de produto
  private async deepProductSearch(
    productQuery: string
  ): Promise<WebSearchResult> {
    try {
      console.log(`🔍 Fazendo busca profunda para: ${productQuery}`);

      // URLs específicas para produtos
      const productUrls = [
        "https://arseletronica.com.br",
        "https://arseletronica.com.br/solucoes/",
        "https://arseletronica.com.br/produtos/",
        "https://arseletronica.com.br/antenas/",
        "https://arseletronica.com.br/conectores/",
        "https://arseletronica.com.br/search/", // Se existir busca
      ];

      let bestMatch = "";
      let foundSpecificProduct = false;
      let allContent = "";

      for (const url of productUrls) {
        try {
          const response = await fetch(url);
          if (response.ok) {
            const html = await response.text();

            // Análise mais específica para produtos
            const productContent = this.extractProductSpecificContent(
              html,
              productQuery
            );

            if (productContent.length > 0) {
              allContent += productContent + " ";

              // Verificar se encontrou referência específica ao produto
              const queryTerms = productQuery.toLowerCase().split(" ");
              const hasSpecificMatch = queryTerms.every((term) =>
                productContent.toLowerCase().includes(term)
              );

              if (hasSpecificMatch) {
                foundSpecificProduct = true;
                bestMatch = productContent;
                break; // Encontrou match específico, pode parar
              }
            }
          }
        } catch (error) {
          console.warn(`Erro ao buscar ${url}:`, error);
        }
      }

      return {
        found: foundSpecificProduct || allContent.length > 0,
        content: bestMatch || allContent.trim(),
        url: "https://arseletronica.com.br",
        error: foundSpecificProduct
          ? undefined
          : "Produto específico não encontrado",
      };
    } catch (error) {
      console.error("Erro na busca profunda:", error);
      return {
        found: false,
        error: error instanceof Error ? error.message : "Erro desconhecido",
      };
    }
  }

  // Método para extrair conteúdo específico de produtos
  private extractProductSpecificContent(html: string, query: string): string {
    // Remove tags HTML mas preserva estrutura
    const textContent = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const queryWords = query
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 2);

    // Buscar por seções que contenham termos do produto
    const sentences = textContent
      .split(/[.!?]+/)
      .filter((sentence) => sentence.length > 15);

    const relevantSentences = sentences.filter((sentence) => {
      const sentenceLower = sentence.toLowerCase();
      // Deve conter pelo menos 50% dos termos da consulta
      const matchCount = queryWords.filter((word) =>
        sentenceLower.includes(word)
      ).length;
      return matchCount >= Math.ceil(queryWords.length * 0.5);
    });

    // Buscar também por títulos de produtos (padrões comuns)
    const productTitles =
      textContent.match(/[A-Z][a-z]+ [A-Z0-9-]+|[A-Z0-9-]+ [A-Z][a-z]+/g) || [];
    const relevantTitles = productTitles.filter((title) => {
      const titleLower = title.toLowerCase();
      return queryWords.some((word) => titleLower.includes(word));
    });

    const allRelevant = [...relevantSentences, ...relevantTitles];
    return (
      allRelevant.slice(0, 8).join(". ") + (allRelevant.length > 0 ? "." : "")
    );
  }

  // Método para extrair conteúdo relevante do HTML
  private extractRelevantContent(html: string, query: string): string {
    // Remove tags HTML e extrai texto
    const textContent = html
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim();

    const queryWords = query
      .toLowerCase()
      .split(" ")
      .filter((word) => word.length > 2);
    const sentences = textContent
      .split(/[.!?]+/)
      .filter((sentence) => sentence.length > 20);

    const relevantSentences = sentences.filter((sentence) => {
      const sentenceLower = sentence.toLowerCase();
      return queryWords.some((word) => sentenceLower.includes(word));
    });

    return relevantSentences.slice(0, 5).join(". ") + ".";
  }

  // Método melhorado que combina busca local e web
  async buscarInformacoesRelevantesMelhorado(
    mensagem: string
  ): Promise<string> {
    // Primeiro, busca na base local
    const localResults = this.buscarInformacoesRelevantes(mensagem);

    // Verificar se encontrou informações específicas para a consulta
    const mensagemLower = mensagem.toLowerCase();

    // Extrair termos específicos da mensagem (modelos, códigos, etc.)
    const specificTerms =
      mensagemLower.match(/[a-z0-9]+-[a-z0-9]+|[a-z]+\d+[a-z]*|\d+[a-z]+/g) ||
      [];

    // Verificar se algum termo específico foi encontrado nos resultados
    const foundSpecificMatch = specificTerms.some((term) =>
      localResults.toLowerCase().includes(term)
    );

    // Detectar se é uma consulta de produto específico
    const isProductQuery =
      mensagemLower.includes("antena") ||
      mensagemLower.includes("conector") ||
      mensagemLower.includes("cabo") ||
      mensagemLower.includes("duplexador") ||
      mensagemLower.includes("combinador") ||
      specificTerms.length > 0;

    // Verificação especial para produtos heliflex
    const isHeliflexQuery =
      mensagemLower.includes("heliflex") &&
      (mensagemLower.includes("antena") || mensagemLower.includes("produto"));
    const hasHeliflexProduct =
      localResults.toLowerCase().includes("heliflex") &&
      !localResults.includes("=== INFORMAÇÕES GERAIS ===");

    // Condições para busca web:
    const isGenericResult =
      localResults.includes("=== INFORMAÇÕES GERAIS ===") ||
      localResults.length < 200;
    const isSpecificQuery = specificTerms.length > 0 && !foundSpecificMatch;
    const isHeliflexSpecific = isHeliflexQuery && !hasHeliflexProduct;
    const isNewsQuery =
      mensagemLower.includes("novidade") ||
      mensagemLower.includes("lançamento") ||
      mensagemLower.includes("contato") ||
      mensagemLower.includes("preço") ||
      mensagemLower.includes("suporte") ||
      mensagemLower.includes("comercial");

    let webResults = "";

    if (this.webSearchEnabled) {
      // Se é uma consulta de produto específico que não foi encontrada localmente
      if (isProductQuery && (isSpecificQuery || isHeliflexSpecific)) {
        console.log(
          `🔍 Produto específico não encontrado localmente: ${mensagem}`
        );
        console.log(`📡 Iniciando busca profunda no site...`);

        try {
          const deepSearch = await this.deepProductSearch(mensagem);

          if (deepSearch.found && deepSearch.content) {
            if (deepSearch.error) {
              webResults = `\n\n=== BUSCA PROFUNDA NO SITE ===\nApós análise completa do site: ${deepSearch.error}\n\nInformações relacionadas encontradas:\n${deepSearch.content}`;
            } else {
              webResults = `\n\n=== PRODUTO ENCONTRADO NO SITE ===\n${deepSearch.content}`;
            }
          } else {
            // Gerar orientações específicas para onde procurar
            const siteGuidance = this.generateSiteNavigationGuidance(mensagem);
            webResults = `\n\n=== ONDE ENCONTRAR NO SITE ===\nApós busca em nossa base de dados, não encontramos informações específicas sobre "${mensagem}". Recomendamos verificar diretamente no nosso site nas seguintes seções:\n\n${siteGuidance}\n\nNossa equipe técnica está sempre atualizando o catálogo online com novos produtos e especificações detalhadas.`;
          }
        } catch (error) {
          console.warn("Erro na busca profunda:", error);
          // Fallback para busca normal
          const normalSearch = await this.searchWebsite(mensagem);
          if (normalSearch.found && normalSearch.content) {
            webResults = `\n\n=== INFORMAÇÕES ADICIONAIS DO SITE ===\n${normalSearch.content}`;
          }
        }
      }
      // Para outros tipos de consulta, usar busca normal
      else if (isGenericResult || isNewsQuery) {
        try {
          const webSearch = await this.searchWebsite(mensagem);
          if (webSearch.found && webSearch.content) {
            webResults = `\n\n=== INFORMAÇÕES ADICIONAIS DO SITE ===\n${webSearch.content}`;
          }
        } catch (error) {
          console.warn("Erro na busca web, usando apenas dados locais:", error);
        }
      }
    }

    return localResults + webResults;
  }

  // Função para gerar orientações específicas de onde procurar no site
  private generateSiteNavigationGuidance(query: string): string {
    const queryLower = query.toLowerCase();
    const baseUrl = "https://arseletronica.com.br";

    let suggestions: string[] = [];

    // Detectar tipo de produto e sugerir seções específicas
    if (queryLower.includes("heliflex")) {
      suggestions.push(
        `📡 **Antenas Heliflex**: ${baseUrl}/solucoes/ → seção "Antenas" → "Heliflex"`
      );
      suggestions.push(
        `🔍 **Catálogo de Antenas**: ${baseUrl}/produtos/ → "Antenas Móveis"`
      );
    }

    if (queryLower.includes("antena")) {
      if (queryLower.includes("móvel") || queryLower.includes("movel")) {
        suggestions.push(
          `📱 **Antenas Móveis**: ${baseUrl}/solucoes/ → "Antenas" → "Móveis"`
        );
      } else if (queryLower.includes("fixa") || queryLower.includes("base")) {
        suggestions.push(
          `🏗️ **Antenas Fixas**: ${baseUrl}/solucoes/ → "Antenas" → "Fixas"`
        );
      } else if (queryLower.includes("direcional")) {
        suggestions.push(
          `🎯 **Antenas Direcionais**: ${baseUrl}/solucoes/ → "Antenas" → "Direcionais"`
        );
      } else {
        suggestions.push(
          `📡 **Catálogo de Antenas**: ${baseUrl}/solucoes/ → seção "Antenas"`
        );
        suggestions.push(
          `🔍 **Produtos**: ${baseUrl}/produtos/ → categoria "Antenas"`
        );
      }
    }

    if (queryLower.includes("conector")) {
      const connectorTypes = ["sma", "bnc", "uhf", "tnc", "fakra", "fme", "n"];
      const detectedType = connectorTypes.find((type) =>
        queryLower.includes(type)
      );

      if (detectedType) {
        suggestions.push(
          `🔌 **Conectores ${detectedType.toUpperCase()}**: ${baseUrl}/solucoes/ → "Conectores" → "Série ${detectedType.toUpperCase()}"`
        );
      }
      suggestions.push(
        `🔧 **Todos os Conectores**: ${baseUrl}/solucoes/ → seção "Conectores"`
      );
    }

    if (queryLower.includes("cabo")) {
      suggestions.push(`🔗 **Cabos**: ${baseUrl}/solucoes/ → seção "Cabos"`);
      suggestions.push(
        `📏 **Cabos Coaxiais**: ${baseUrl}/produtos/ → "Cabos Coaxiais"`
      );
    }

    if (queryLower.includes("duplexador")) {
      suggestions.push(
        `⚡ **Duplexadores**: ${baseUrl}/solucoes/ → seção "Duplexadores"`
      );
    }

    if (queryLower.includes("combinador")) {
      suggestions.push(
        `🔄 **Combinadores**: ${baseUrl}/solucoes/ → seção "Combinadores"`
      );
    }

    // Verificar códulos/modelos específicos
    const modelPattern = /[a-z0-9]+-[a-z0-9]+|[a-z]+\d+[a-z]*|\d+[a-z]+/gi;
    const models = query.match(modelPattern);

    if (models && models.length > 0) {
      suggestions.push(
        `🔍 **Busca por modelo**: Use a busca do site (${baseUrl}) com o código "${models[0]}"`
      );
    }

    // Se não detectou tipo específico, dar orientações gerais
    if (suggestions.length === 0) {
      suggestions.push(
        `🏠 **Página Inicial**: ${baseUrl} → use a busca do site`
      );
      suggestions.push(`📋 **Catálogo Completo**: ${baseUrl}/produtos/`);
      suggestions.push(`💡 **Soluções**: ${baseUrl}/solucoes/`);
    }

    // Sempre adicionar contato
    suggestions.push(
      `📞 **Contato Direto**: ${baseUrl}/contato/ ou ligue (11) 5523-9811`
    );

    return suggestions.join("\n");
  }

  // Método para verificar se a busca web está habilitada
  isWebSearchEnabled(): boolean {
    return this.webSearchEnabled;
  }
}

export const dataManager = new DataManager();
export default dataManager;
