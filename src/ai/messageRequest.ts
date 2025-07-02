import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "../config.js";
import { dataManager } from "../data/dataManager.js";

const genAI = new GoogleGenerativeAI(config.GEMINI_API_KEY);

interface MessageHistory {
  role: "user" | "model";
  content: string;
  timestamp?: Date;
}

export let conversationHistory: MessageHistory[] = [];

//Função para buscar informações relevantes na base de dados
async function buscarInformacoesRelevantes(mensagem: string): Promise<string> {
  return await dataManager.buscarInformacoesRelevantesMelhorado(mensagem);
}

export async function sendMessage(
  message: string
): Promise<{ success: boolean; data?: string; error?: string }> {
  try {
    const informacoesRelevantes = await buscarInformacoesRelevantes(message);

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const empresaInfo = dataManager.getEmpresaInfo();

    const prompt = `
Você é um assistente virtual especializado da ARS Eletrônica, uma empresa brasileira líder em soluções de radiocomunicação desde 1952.

INFORMAÇÕES DA EMPRESA:
${JSON.stringify(empresaInfo, null, 2)}

INFORMAÇÕES RELEVANTES PARA A CONSULTA (USE TODAS ESTAS INFORMAÇÕES):
${informacoesRelevantes}

INSTRUÇÕES PARA RESPOSTA:
1. Responda sempre em português brasileiro
2. Seja técnico mas acessível  
3. USE TODAS as informações fornecidas acima - não resuma ou omita dados importantes
4. Se há informações do site (seção "INFORMAÇÕES ADICIONAIS DO SITE"), INCLUA essas informações na resposta
5. Para informações técnicas, apresente especificações completas quando disponíveis
6. Sempre mencione que você representa a ARS Eletrônica
7. Foque em soluções de radiocomunicação
8. Mantenha um tom profissional e prestativo
9. Se a pergunta for sobre lançamentos/novidades, utilize especificamente as informações web fornecidas
10. Apresente dados estruturados de forma organizada e completa

CONSULTA DO CLIENTE:
${message}

IMPORTANTE: Utilize TODAS as informações fornecidas. Não faça resumos que omitam dados relevantes.
Responda de forma completa e útil:
`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();

    // Adicionar à história da conversa
    conversationHistory.push(
      { role: "user", content: message, timestamp: new Date() },
      { role: "model", content: text, timestamp: new Date() }
    );

    // Limitar histórico a 10 mensagens
    if (conversationHistory.length > 10) {
      conversationHistory = conversationHistory.slice(-10);
    }

    return { success: true, data: text };
  } catch (error: any) {
    console.error("Erro ao processar mensagem:", error);

    // Tratar diferentes tipos de erro
    if (error.status === 429) {
      return {
        success: false,
        error:
          "API temporariamente indisponível devido ao limite de uso. Tente novamente em alguns minutos.",
      };
    } else if (error.message?.includes("quota")) {
      return {
        success: false,
        error: "Limite de uso da API foi atingido. Tente novamente mais tarde.",
      };
    } else if (
      error.message?.includes("network") ||
      error.message?.includes("fetch")
    ) {
      return {
        success: false,
        error: "Erro de conexão. Verifique sua internet e tente novamente.",
      };
    }

    return {
      success: false,
      error: "Erro interno no processamento da mensagem. Tente novamente.",
    };
  }
}

export function getHistory(): MessageHistory[] {
  return conversationHistory;
}

export function clearHistory(): void {
  conversationHistory = [];
}
