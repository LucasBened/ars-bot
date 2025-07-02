import dotenv from "dotenv";

dotenv.config();

export const config = {
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "",
  PORT: process.env.PORT || 3100,
  WEBHOOK_VERIFY_TOKEN: process.env.WEBHOOK_VERIFY_TOKEN || "my_verify_token",
  WHATSAPP_ACCESS_TOKEN: process.env.WHATSAPP_ACCESS_TOKEN || "",
  PHONE_NUMBER_ID: process.env.PHONE_NUMBER_ID || "",
};

//Validar se as variáveis obrigatórias estão definidas
const requiredVars = ["GEMINI_API_KEY"];
const missingVars = requiredVars.filter(
  (varName) => !config[varName as keyof typeof config]
);

if (missingVars.length > 0) {
  console.error(
    "Variáveis de ambiente obrigatórias não encontradas:",
    missingVars
  );
  console.log("Verifique seu arquivo .env e inclua:");
  missingVars.forEach((varName) => {
    console.log(`   ${varName}=sua_chave_aqui`);
  });
  process.exit(1);
}

console.log("✅ Configuração carregada com sucesso");
