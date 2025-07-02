import "dotenv/config";
import {
  sendMessage,
  conversationHistory,
  getHistory,
} from "./ai/messageRequest.ts";
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

  const response = await sendMessage(message);

  if (!response) {
    res.status(500).json({ error: "Erro interno do servidor" });
    return;
  }

  res.json({ message: response });
});

app.get("/history", (req, res) => {
  res.json({
    history: getHistory(),
    totalMessages: conversationHistory.length,
  });
});

app.get("/", (req, res) => {
  res.send("Servidor rodando. Envie uma mensagem POST para /message.");
});

app.listen(port, () => {
  console.log(`Rodando servidor na porta: http://localhost:${port}`);
});
