import "dotenv/config";
import { sendMessage, getHistory } from "./ai/messageRequest.js";
import express from "express";

const app = express();
const port = 3100;

app.use(express.json());

app.post("/message", async (req, res) => {
  const { message } = req.body;

  if (!message) {
    res.status(400).json({ error: "Mensagem é obrigatória" });
    return;
  }

  try {
    const response = await sendMessage(message);

    if (!response.success) {
      // Determinar o código de status baseado no tipo de erro
      let statusCode = 500;
      if (
        response.error?.includes("limite de uso") ||
        response.error?.includes("temporariamente indisponível")
      ) {
        statusCode = 429;
      } else if (response.error?.includes("conexão")) {
        statusCode = 503;
      }

      res.status(statusCode).json({
        error: response.error || "Erro interno do servidor",
        details: "Consulte os logs para mais informações",
      });
      return;
    }

    res.json({ message: response.data });
  } catch (error) {
    console.error("Erro não tratado:", error);
    res.status(500).json({
      error: "Erro interno do servidor",
      details: "Erro inesperado no processamento",
    });
  }
});

app.get("/history", (req, res) => {
  const history = getHistory();
  res.json({
    history,
    totalMessages: history.length,
  });
});

// Endpoint de status para verificar se o serviço está funcionando
app.get("/status", (req, res) => {
  res.json({
    status: "online",
    timestamp: new Date().toISOString(),
    version: "1.0.0",
    features: {
      localSearch: true,
      webSearch: true,
      aiIntegration: true,
    },
  });
});

// Endpoint para testar busca sem usar IA
app.post("/search", async (req, res) => {
  const { query } = req.body;

  if (!query) {
    res.status(400).json({ error: "Query é obrigatória" });
    return;
  }

  try {
    // Importar dataManager dinamicamente para evitar problemas de importação
    const { dataManager } = await import("./data/dataManager.js");
    const searchResults =
      await dataManager.buscarInformacoesRelevantesMelhorado(query);

    res.json({
      query,
      results: searchResults,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Erro na busca:", error);
    res.status(500).json({
      error: "Erro ao realizar busca",
      details: error instanceof Error ? error.message : "Erro desconhecido",
    });
  }
});

app.get("/", (req, res) => {
  res.send("Servidor rodando. Envie uma mensagem POST para /message.");
});

app.listen(port, () => {
  console.log(`Rodando servidor na porta: http://localhost:${port}`);
});
