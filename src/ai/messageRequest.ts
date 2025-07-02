import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../config.js";
import baseDados, { funcoesBusca } from "../../instructions.js";

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

interface MessageHistory {
  role: "user" | "model";
  content: string;
  timestamp?: Date;
}

export let conversationHistory: MessageHistory[] = [];

//Função para buscar informações relevantes na base de dados
function buscarInformacoesRelevantes(mensagem: string): string {
  const mensagemLower = mensagem.toLowerCase();
  let informacoes: string[] = [];

  //Detectar solicitações de catálogo/lista
  const catalogoKeywords = [
    "catálogo",
    "catalogo",
    "lista",
    "listagem",
    "todos",
    "todas",
    "me mostre",
  ];
  const categoriaKeywords = [
    "antena",
    "antenas",
    "duplexador",
    "duplexadores",
    "conector",
    "conectores",
    "cabo",
    "cabos",
  ];

  //Detectar solicitações sobre certificados
  const certificadoKeywords = [
    "certificado",
    "certificados",
    "certificação",
    "certificações",
    "iso",
    "anatel",
    "homologação",
    "homologado",
    "homologados",
    "inmetro",
    "qualidade",
    "conformidade",
  ];

  //Detectar solicitações sobre concorrentes e diferenciais
  const mercadoKeywords = [
    "concorrente",
    "concorrentes",
    "competidor",
    "competidores",
    "diferencial",
    "diferenciais",
    "vantagem",
    "vantagens",
    "posicionamento",
    "mercado",
    "competição",
    "comparação",
    "comparativo",
  ];

  const isMercadoRequest = mercadoKeywords.some((keyword) =>
    mensagemLower.includes(keyword)
  );

  if (isMercadoRequest) {
    informacoes.push("ANÁLISE DE MERCADO E POSICIONAMENTO DA ARS ELETRÔNICA:");
    informacoes.push("");

    //Posicionamento no mercado
    informacoes.push("🌐 POSICIONAMENTO ESTRATÉGICO:");
    informacoes.push(
      funcoesBusca.analiseEstrategica.mercado.paisageCompetitiva.posicionamento
    );
    informacoes.push("");

    //Diferenciais competitivos
    informacoes.push("✅ DIFERENCIAIS COMPETITIVOS:");
    funcoesBusca.analiseEstrategica.mercado.paisageCompetitiva.diferenciais.forEach(
      (diferencial, index) => {
        informacoes.push(`${index + 1}. ${diferencial}`);
      }
    );
    informacoes.push("");

    //Concorrentes
    informacoes.push("🔄 PRINCIPAIS CONCORRENTES E RELAÇÕES DE MERCADO:");
    funcoesBusca.analiseEstrategica.mercado.paisageCompetitiva.concorrentes.forEach(
      (concorrente) => {
        informacoes.push(`- ${concorrente.nome} (${concorrente.tipo}):`);
        informacoes.push(`  ${concorrente.relacao}`);
      }
    );
    informacoes.push("");

    //Fatores de crescimento do mercado
    informacoes.push("📈 FATORES DE CRESCIMENTO DO MERCADO:");
    funcoesBusca.analiseEstrategica.mercado.fatoresCrescimento.forEach(
      (fator) => {
        informacoes.push(`- ${fator.fator}: ${fator.descricao}`);
      }
    );

    return informacoes.join("\n");
  }

  const isCertificadoRequest = certificadoKeywords.some((keyword) =>
    mensagemLower.includes(keyword)
  );

  if (isCertificadoRequest) {
    informacoes.push("CERTIFICAÇÕES DA ARS ELETRÔNICA:");
    informacoes.push("");

    //Descrição geral das certificações
    informacoes.push(baseDados.empresa.certificacoes.descricao);
    informacoes.push("");

    //Certificados nacionais
    informacoes.push("📜 CERTIFICAÇÕES NACIONAIS:");
    baseDados.empresa.certificacoes.certificadosNacionais.forEach((cert) => {
      informacoes.push(`- ${cert.nome}: ${cert.descricao}`);
    });
    informacoes.push("");

    //Certificados internacionais
    informacoes.push("🌎 CERTIFICAÇÕES INTERNACIONAIS:");
    baseDados.empresa.certificacoes.certificadosInternacionais.forEach(
      (cert) => {
        informacoes.push(`- ${cert.nome}: ${cert.descricao}`);
      }
    );
    informacoes.push("");

    //Certificados de gestão
    informacoes.push("🏢 CERTIFICAÇÕES DE GESTÃO:");
    baseDados.empresa.certificacoes.certificadosGestao.forEach((cert) => {
      informacoes.push(`- ${cert.nome}: ${cert.descricao}`);
    });

    return informacoes.join("\n");
  }

  const isCatalogoRequest = catalogoKeywords.some((keyword) =>
    mensagemLower.includes(keyword)
  );
  const categoria = categoriaKeywords.find((keyword) =>
    mensagemLower.includes(keyword)
  );

  if (isCatalogoRequest && categoria) {
    try {
      //Buscar produtos da categoria específica
      let produtosDaCategoria: any[] = [];

      if (categoria.includes("antena")) {
        //Buscar todas as antenas
        Object.values(baseDados.catalogoProdutos.antenas.subcategorias).forEach(
          (subcategoria: any) => {
            produtosDaCategoria.push(...subcategoria);
          }
        );

        informacoes.push(
          `CATÁLOGO DE ANTENAS ARS ELETRÔNICA (${produtosDaCategoria.length} produtos):`
        );
        informacoes.push("");

        //Agrupar por subcategoria
        const subcategorias = Object.keys(
          baseDados.catalogoProdutos.antenas.subcategorias
        );
        subcategorias.forEach((subcat) => {
          const produtos =
            baseDados.catalogoProdutos.antenas.subcategorias[
              subcat as keyof typeof baseDados.catalogoProdutos.antenas.subcategorias
            ];
          if (produtos.length > 0) {
            informacoes.push(`📡 ${subcat.toUpperCase()}:`);
            produtos.forEach((produto: any, index: number) => {
              informacoes.push(
                `${index + 1}. ${produto.nome} (${produto.modelo})`
              );
              informacoes.push(`   Código: ${produto.codigos.join(", ")}`);
              if (produto.especificacoes?.eletricas?.frequencia) {
                informacoes.push(
                  `   Frequência: ${produto.especificacoes.eletricas.frequencia}`
                );
              }
              if (produto.url) informacoes.push(`   URL: ${produto.url}`);
              informacoes.push("");
            });
          }
        });
      } else if (categoria.includes("duplexador")) {
        //Buscar duplexadores se existirem na base
        const duplexadores = funcoesBusca.buscarProduto("duplexador");
        if (duplexadores.length > 0) {
          informacoes.push(
            `CATÁLOGO DE DUPLEXADORES (${duplexadores.length} produtos):`
          );
          duplexadores.forEach((produto: any, index: number) => {
            informacoes.push(
              `${index + 1}. ${produto.nome} (${produto.modelo})`
            );
            informacoes.push(`   Código: ${produto.codigos.join(", ")}`);
            if (produto.url) informacoes.push(`   URL: ${produto.url}`);
          });
        }
      } else if (categoria.includes("conector")) {
        //Buscar conectores
        const conectores = funcoesBusca.buscarProduto("conector");
        if (conectores.length > 0) {
          informacoes.push(
            `CATÁLOGO DE CONECTORES (${conectores.length} produtos):`
          );
          conectores.forEach((produto: any, index: number) => {
            informacoes.push(
              `${index + 1}. ${produto.nome} (${produto.modelo})`
            );
            informacoes.push(`   Código: ${produto.codigos.join(", ")}`);
            if (produto.url) informacoes.push(`   URL: ${produto.url}`);
          });
        }
      }

      if (informacoes.length === 0) {
        informacoes.push(
          `Produtos de ${categoria} não encontrados na base de dados atual.`
        );
      }
    } catch (error) {
      console.error("Erro ao buscar catálogo:", error);
      informacoes.push(`Erro ao buscar catálogo de ${categoria}.`);
    }
  }

  //Buscar por código específico primeiro (padrão: 6 dígitos)
  const codigoMatch = mensagem.match(/\b(\d{6})\b/);
  if (codigoMatch && !isCatalogoRequest) {
    const codigo = codigoMatch[1];
    try {
      const especificacoes = funcoesBusca.obterEspecificacoesTecnicas(codigo);
      if (especificacoes) {
        informacoes.push(`ESPECIFICAÇÕES TÉCNICAS DO CÓDIGO ${codigo}:`);
        informacoes.push(JSON.stringify(especificacoes, null, 2));

        //Buscar também o produto completo para ter mais informações
        const produtoCompleto = funcoesBusca.buscarProduto(codigo);
        if (produtoCompleto.length > 0) {
          const produto = produtoCompleto[0];
          informacoes.push(`\nINFORMAÇÕES COMPLETAS DO PRODUTO:`);
          informacoes.push(`Nome: ${produto.nome}`);
          informacoes.push(`Modelo: ${produto.modelo}`);
          informacoes.push(`Códigos: ${produto.codigos.join(", ")}`);
          informacoes.push(`Descrição: ${produto.descricao}`);
          if (produto.url) informacoes.push(`URL: ${produto.url}`);
          if (produto.caracteristicasAdicionais) {
            informacoes.push(
              `Características: ${produto.caracteristicasAdicionais.join(", ")}`
            );
          }
        }
      } else {
        //Se não encontrou por código exato, tentar busca geral
        informacoes.push(
          `Código ${codigo} não encontrado. Tentando busca geral...`
        );
      }
    } catch (error) {
      console.error("Erro ao buscar por código:", error);
      informacoes.push(
        `Erro ao buscar código ${codigo}. Tentando busca geral...`
      );
    }
  }

  //Buscar produtos gerais (se não for catálogo e não encontrou por código ou para complementar)
  if (!isCatalogoRequest) {
    try {
      const produtosEncontrados = funcoesBusca.buscarProduto(mensagem);
      if (produtosEncontrados.length > 0) {
        if (!codigoMatch) {
          //Se não havia busca por código, mostrar título
          informacoes.push(
            `PRODUTOS ENCONTRADOS (${produtosEncontrados.length}):`
          );
        }
        produtosEncontrados.slice(0, 5).forEach((produto, index) => {
          if (!codigoMatch) {
            //Se não era busca por código, mostrar formato resumido
            informacoes.push(
              `${index + 1}. ${produto.nome} (${produto.modelo})`
            );
            informacoes.push(`   Códigos: ${produto.codigos.join(", ")}`);
            if (produto.url) informacoes.push(`   URL: ${produto.url}`);
          }
        });
      }
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  //Buscar por frequência se mencionada (não em solicitações de catálogo)
  const frequenciaMatch = mensagemLower.match(/(\d+)\s*(mhz|ghz)/i);
  if (frequenciaMatch && !isCatalogoRequest) {
    try {
      const frequencia = parseFloat(frequenciaMatch[1]);
      const unidade = frequenciaMatch[2].toLowerCase() as "MHz" | "GHz";
      const produtosPorFrequencia = funcoesBusca.buscarPorFrequencia(
        frequencia,
        unidade
      );

      if (produtosPorFrequencia.length > 0) {
        informacoes.push(
          `\nPRODUTOS COMPATÍVEIS COM ${frequencia} ${unidade.toUpperCase()}:`
        );
        produtosPorFrequencia.slice(0, 3).forEach((produto, index) => {
          informacoes.push(`${index + 1}. ${produto.nome} - ${produto.modelo}`);
        });
      }
    } catch (error) {
      console.error("Erro ao buscar por frequência:", error);
    }
  }

  //Buscar por aplicação (não em solicitações de catálogo)
  const aplicacoes = [
    "segurança pública",
    "utilities",
    "radioamadorismo",
    "iot",
    "m2m",
  ];
  const aplicacaoEncontrada = aplicacoes.find((app) =>
    mensagemLower.includes(app)
  );

  if (aplicacaoEncontrada && !isCatalogoRequest) {
    try {
      const aplicacao = funcoesBusca.buscarPorAplicacao(aplicacaoEncontrada);
      if (aplicacao) {
        informacoes.push(
          `\nINFORMAÇÕES SOBRE ${aplicacaoEncontrada.toUpperCase()}:`
        );
        informacoes.push(`Descrição: ${aplicacao.descricao}`);
        if (aplicacao.produtosRecomendados) {
          informacoes.push("Produtos recomendados:");
          aplicacao.produtosRecomendados.forEach((categoria: any) => {
            informacoes.push(
              `- ${categoria.categoria}: ${categoria.produtos.join(", ")}`
            );
          });
        }
      }
    } catch (error) {
      console.error("Erro ao buscar por aplicação:", error);
    }
  }

  return informacoes.length > 0
    ? informacoes.join("\n")
    : "Nenhuma informação específica encontrada na base de dados.";
}

export async function sendMessage(userMessage: string) {
  try {
    //Buscar informações relevantes na base de dados
    const informacoesRelevantes = buscarInformacoesRelevantes(userMessage);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
      systemInstruction: `Você é um assistente especializado da ARS Eletrônica, empresa brasileira líder em soluções de radiocomunicação.

INSTRUÇÕES PRINCIPAIS:
- Responda sempre em português brasileiro
- Seja técnico mas didático
- Use SEMPRE as informações da base de dados fornecida
- Seja prestativo e profissional
- Quando não souber algo, seja honesto
- Ofereça sempre produtos/soluções relevantes
- Use emojis moderadamente para tornar mais amigável
- Inclua códigos de produto quando relevante
- Mencione URLs quando disponível

SOBRE A ARS ELETRÔNICA:
- Nome: ${baseDados.empresa.identificacao.nomeOficial}
- Fundada em: ${baseDados.empresa.institucional.fundacao.ano}
- Especialidades: Antenas, duplexadores, conectores, cabos
- Segmentos: Segurança pública, utilities, IoT/M2M, radioamadorismo
- Certificações: ISO 9001:2015, ISO 14001:2015, ANATEL, INMETRO, CE, FCC, RoHS
- Diferenciais: Fabricação 100% nacional, Agilidade nas entregas, Personalização de produtos
- Posicionamento: Líder em componentes passivos de RF para o mercado de telecomunicações
- Site: ${baseDados.empresa.identificacao.website}
- Contato: ${baseDados.empresa.identificacao.contatoPrincipal}

FORMATO DE RESPOSTA:
- Seja conciso mas completo
- Use listas quando apropriado
- Inclua códigos de produto quando relevante
- Mencione URLs quando houver
- Termine sempre oferecendo ajuda adicional

Você receberá informações específicas da base de dados junto com cada pergunta do cliente.`,
    });

    //Adicionar mensagem do usuário ao histórico
    conversationHistory.push({
      role: "user",
      content: userMessage,
      timestamp: new Date(),
    });

    //Preparar mensagem com contexto relevante
    const mensagemComContexto = `${userMessage}

INFORMAÇÕES RELEVANTES ENCONTRADAS:
${informacoesRelevantes}`;

    //Converter histórico para o formato da API (excluindo a última mensagem que será enviada separadamente)
    const history = conversationHistory.slice(0, -1).map((msg) => ({
      role: msg.role,
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: history,
    });

    const result = await chat.sendMessage(mensagemComContexto);
    const responseText = result.response.text();

    //Adicionar resposta ao histórico
    conversationHistory.push({
      role: "model",
      content: responseText,
      timestamp: new Date(),
    });

    return responseText;
  } catch (error) {
    console.error("Erro ao enviar mensagem para o Gemini:", error);

    //Resposta de fallback
    return `Desculpe, estou enfrentando dificuldades técnicas no momento. 

🔧 **ARS Eletrônica - Soluções em Radiocomunicação**

Para atendimento direto:
📞 Vendas: (11) 5523-9811
📧 vendas@arseletronica.com.br
🌐 https://rseletronica.com.br

Posso tentar ajudar novamente em alguns instantes!`;
  }
}

export function getHistory() {
  return conversationHistory.map((msg) => ({
    role: msg.role,
    content: msg.content,
    timestamp: msg.timestamp?.toISOString(),
  }));
}

export function clearHistory() {
  conversationHistory = [];
}
