# WhatsApp Bot - ARS Eletrônica

<div align="center">

![ARS Eletrônica Logo](https://arseletronica.com.br/wp-content/uploads/2021/06/logo_site-2.png)

_Um assistente virtual especializado em soluções de radiocomunicação da ARS Eletrônica_

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/)
[![Google AI](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

</div>

## 📋 Índice

- [Visão Geral](#-visão-geral)
- [Funcionalidades](#-funcionalidades)
- [Configuração](#-configuração)
- [Uso](#-uso)
- [API](#-api)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Base de Conhecimento](#-base-de-conhecimento)
- [Contribuição](#-contribuição)
- [Licença](#-licença)

## 🔍 Visão Geral

Este bot para WhatsApp foi desenvolvido para proporcionar atendimento automatizado especializado em produtos e soluções da ARS Eletrônica, uma empresa líder em soluções de radiocomunicação no Brasil desde 1952. Utilizando a tecnologia Google Gemini AI, o bot oferece respostas precisas e contextualizadas sobre o catálogo de produtos, especificações técnicas e informações institucionais.

## ✨ Funcionalidades

| Categoria          | Recursos                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Catálogo**       | • Listagem completa de produtos<br>• Filtro por categoria (antenas, duplexadores, conectores, cabos)<br>• Busca por código ou modelo |
| **Especificações** | • Detalhes técnicos completos<br>• Compatibilidade por frequência<br>• Aplicações recomendadas                                       |
| **Informações**    | • Dados institucionais<br>• Certificações e homologações<br>• Análise de mercado e concorrentes<br>• Diferenciais competitivos       |
| **Suporte**        | • Recomendações baseadas em necessidades<br>• Respostas contextualizadas<br>• Informações de contato                                 |

## 🚀 Configuração

### Pré-requisitos

- [Node.js](https://nodejs.org/) (v14 ou superior)
- [npm](https://www.npmjs.com/) (v6 ou superior)
- Chave de API do [Google Gemini AI](https://ai.google.dev/)

### Instalação

<details>
<summary>Clique para expandir o passo-a-passo de instalação</summary>

#### 1. Clone o repositório

```bash
git clone [url-do-repositorio]
cd wpp-bot
```

#### 2. Instale as dependências

```bash
npm install
```

#### 3. Configure as variáveis de ambiente

Copie o arquivo de exemplo:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e adicione sua chave da API:

```env
GEMINI_API_KEY=sua_chave_aqui
```

#### 4. Compile o projeto TypeScript

```bash
npm run build
```

</details>

### Checklist de Configuração

- [ ] Clonar o repositório
- [ ] Instalar dependências com `npm install`
- [ ] Criar arquivo `.env` com chave API do Gemini
- [ ] Compilar o projeto com `npm run build`
- [ ] Iniciar o servidor com `npm start`
- [ ] Verificar se o servidor está rodando em `http://localhost:3100`

## 🎮 Uso

### Iniciar o servidor

```bash
npm start
```

O servidor será iniciado em `http://localhost:3100`

### Exemplos de perguntas para o bot

| Categoria         | Exemplos de Perguntas                                                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| **Produtos**      | • "Mostre o catálogo de antenas"<br>• "Quais conectores tipo N vocês têm?"<br>• "Preciso de um cabo coaxial de baixa perda"            |
| **Técnico**       | • "Qual antena funciona em 450MHz?"<br>• "Especificações do duplexador DPS-450/15-3C"<br>• "Preciso de uma antena para faixa marítima" |
| **Institucional** | • "Quais são as certificações da ARS?"<br>• "Quais os diferenciais da empresa?"<br>• "Quando a empresa foi fundada?"                   |

## 💾 API

### Endpoints

| Método | Endpoint   | Descrição                    | Payload                 | Resposta                                                             |
| ------ | ---------- | ---------------------------- | ----------------------- | -------------------------------------------------------------------- |
| `POST` | `/message` | Enviar mensagem para o bot   | `{"message": "string"}` | `{"message": "string"}`                                              |
| `GET`  | `/history` | Obter histórico de conversas | -                       | `[{"role": "user/model", "content": "string", "timestamp": "date"}]` |
| `GET`  | `/`        | Verificar status do servidor | -                       | `{"status": "online", "uptime": "string"}`                           |

### Exemplo de integração

```javascript
// Exemplo usando fetch
async function sendMessage(texto) {
  const response = await fetch("http://localhost:3100/message", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: texto }),
  });

  return await response.json();
}

// Uso
sendMessage("Preciso de uma antena para VHF").then((response) =>
  console.log(response.message)
);
```

## 📁 Estrutura do Projeto

```
wpp-bot/
├── src/
│   ├── index.ts           # Servidor Express e rotas
│   ├── config.ts          # Configurações e variáveis de ambiente
│   └── ai/
│       └── messageRequest.ts  # Lógica de processamento de mensagens e integração com Gemini AI
│
├── instructions.ts        # Base de conhecimento de produtos e informações institucionais
├── .env.example           # Exemplo de variáveis de ambiente
├── package.json           # Dependências e scripts
├── tsconfig.json          # Configuração do TypeScript
└── README.md              # Documentação
```

## 🧠 Base de Conhecimento

A base de conhecimento do bot inclui:

- **Informações Institucionais**: História, missão, visão e valores da ARS Eletrônica
- **Catálogo Completo**: Todos os produtos organizados por categorias e subcategorias
- **Especificações Técnicas**: Detalhes técnicos de cada produto, incluindo:
  - Especificações elétricas (frequência, potência, impedância)
  - Especificações mecânicas (dimensões, peso, materiais)
  - Especificações ambientais (resistência a intempéries)
- **Certificações**: Informações sobre homologações e certificados nacionais e internacionais
- **Análise de Mercado**: Posicionamento estratégico, diferenciais e concorrentes

### Mapa de Conteúdo da Base de Conhecimento

| Seção                | Subseções                                            | Descrição                             |
| -------------------- | ---------------------------------------------------- | ------------------------------------- |
| `empresa`            | identificacao, institucional, mercado, certificacoes | Informações sobre a empresa           |
| `catalogoProdutos`   | antenas, duplexadores, cabos, conectores             | Produtos organizados por categoria    |
| `analiseEstrategica` | mercado, aplicacoesPorSegmento                       | Informações de mercado e competitivas |
| `funcoesBusca`       | buscarProduto, buscarPorFrequencia, etc.             | Funções de busca na base de dados     |

## 🤝 Contribuição

Contribuições são bem-vindas! Siga estas etapas:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Faça commit das alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## ✅ Status do Projeto

### Funcionalidades Implementadas

| Status | Categoria         | Funcionalidade          | Descrição                                                     |
| :----: | ----------------- | ----------------------- | ------------------------------------------------------------- |
|   ✅   | **Core**          | Base de Conhecimento    | Estrutura completa de dados sobre produtos, empresa e mercado |
|   ✅   | **Core**          | Motor de Busca          | Sistema de busca por relevância, código e categoria           |
|   ✅   | **Core**          | API REST                | Endpoints para mensagens e histórico de conversas             |
|   ✅   | **Core**          | Integração Gemini AI    | Processamento de linguagem natural e geração de respostas     |
|   ✅   | **Catálogo**      | Produtos Completos      | Todas as categorias e subcategorias de produtos cadastradas   |
|   ✅   | **Catálogo**      | Especificações Técnicas | Detalhes elétricos, mecânicos e ambientais dos produtos       |
|   ✅   | **Institucional** | Informações da Empresa  | História, missão, visão, valores e contatos                   |
|   ✅   | **Institucional** | Certificações           | Certificados nacionais e internacionais de qualidade          |
|   ✅   | **Mercado**       | Análise Competitiva     | Informações sobre concorrentes e posicionamento               |
|   ✅   | **Mercado**       | Diferenciais            | Vantagens competitivas e fatores de crescimento               |
|   ✅   | **Segmentos**     | Aplicações por Setor    | Soluções específicas para cada segmento de mercado            |

### Funcionalidades Pendentes

| Prioridade | Categoria          | Funcionalidade            | Descrição                                                             |
| :--------: | ------------------ | ------------------------- | --------------------------------------------------------------------- |
|     🔴     | **Integração**     | WhatsApp API              | Conexão com WhatsApp Business API para envio/recebimento de mensagens |
|     🔴     | **Integração**     | Webhook para Notificações | Sistema para receber notificações de novas mensagens                  |
|     🟠     | **UI**             | Interface Administrativa  | Painel para visualização e gestão de conversas                        |
|     🟠     | **Funcionalidade** | Encaminhamento Humano     | Detectar quando transferir para atendente humano                      |
|     🟢     | **Conteúdo**       | Base de Manuais           | Inclusão de manuais técnicos e guias de instalação                    |

**Legenda de Prioridade:**

- 🔴 Alta: Essencial para o funcionamento básico do sistema
- 🟠 Média: Importante para operação eficiente
- 🟡 Baixa: Desejável para melhorar a experiência
- 🟢 Futura: Planejada para próximas versões

## 📄 Licença

Este projeto está licenciado sob a [Licença MIT](LICENSE).

---
