# Teste do Bot - ARS Eletrônica

Este arquivo mostra como testar o bot com diferentes tipos de perguntas.

## Como testar

1. Configure o arquivo `.env` com sua chave do Gemini
2. Execute `npm start`
3. Use qualquer cliente HTTP, cURL, ou código para testar os endpoints

## Exemplos de Requisições HTTP

Abaixo estão exemplos de requisições HTTP que podem ser usadas para testar o bot. Esses exemplos podem ser utilizados em qualquer ferramenta que permita fazer requisições HTTP, como cURL, Insomnia, código direto, etc.

### Endpoints Disponíveis

| Método | URL | Descrição |
|--------|-----|-----------|
| `GET` | `http://localhost:3100/` | Verificar status do servidor |
| `GET` | `http://localhost:3100/history` | Obter histórico de conversas |
| `POST` | `http://localhost:3100/message` | Enviar mensagem para o bot |

### 1. Requisições de Catálogo de Produtos

#### 1.1 Catálogo de Antenas

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Me dê o catálogo de antenas"
}
```

#### 1.2 Catálogo de Conectores

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Mostre todos os conectores disponíveis"
}
```

#### 1.3 Catálogo de Cabos

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Lista de cabos coaxiais"
}
```

### 2. Buscas por Especificação

#### 2.1 Busca por Frequência

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Preciso de antenas que operem em 450 MHz"
}
```

#### 2.2 Busca por Código de Produto

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Especificações do produto código 501695"
}
```

#### 2.3 Busca por Modelo

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Informações sobre o modelo MU-55"
}
```
        {
          "name": "Busca por Modelo",

### 3. Informações Institucionais

#### 3.1 Sobre a Empresa

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Me fale sobre a ARS Eletrônica"
}
```

#### 3.2 Certificações

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Quais são os certificados de vocês?"
}
```

#### 3.3 Concorrentes e Diferenciais

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Quais são os concorrentes e diferenciais de vocês?"
}
```

### 4. Aplicações por Segmento

#### 4.1 Segurança Pública

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Quais produtos são ideais para segurança pública?"
}
```

#### 4.2 Agronegócio

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Preciso de soluções para agricultura de precisão e RTK"
}
```

#### 4.3 IoT e LTE

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Quais produtos vocês têm para aplicações IoT e LTE?"
}
```

### 5. API Endpoints

#### 5.1 Obter Histórico

```http
GET /history HTTP/1.1
Host: localhost:3100
```

#### 5.2 Status do Servidor

```http
GET / HTTP/1.1
Host: localhost:3100
```

## Exemplos de Requisições com cURL

### 1. Busca por produto específico

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Preciso de informações sobre a antena MU-55"}'
```

### 2. Busca por frequência

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Tenho um equipamento que opera em 800 MHz, que antena recomendam?"}'
```

### 3. Busca por aplicação

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Preciso de soluções para segurança pública"}'
```

### 4. Pergunta geral sobre a empresa

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Me fale sobre a ARS Eletrônica"}'
```

### 5. Especificações técnicas

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Quais são as especificações do código 501695?"}'
```

### 6. Catálogo de produtos

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Me dê o catálogo de antenas"}'
```

### 7. Lista de produtos específicos

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Mostre todas as antenas móveis"}'
```

### 8. Certificações e Homologações

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Quais homologações e certificados de qualidade vocês possuem?"}'
```

### 9. Análise Estratégica e Mercado

```bash
curl -X POST http://localhost:3100/message \
  -H "Content-Type: application/json" \
  -d '{"message": "Qual o posicionamento da ARS no mercado de antenas?"}'
```

## Exemplos em Código

### JavaScript/Node.js

```javascript
const axios = require('axios');

async function enviarMensagem(texto) {
  try {
    const resposta = await axios.post('http://localhost:3100/message', {
      message: texto
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    return resposta.data;
  } catch (erro) {
    console.error('Erro ao enviar mensagem:', erro);
    return null;
  }
}

// Exemplo de uso
enviarMensagem("Preciso de uma antena para VHF")
  .then(resposta => console.log(resposta.message));
```

### Python

```python
import requests
import json

def enviar_mensagem(texto):
    url = "http://localhost:3100/message"
    headers = {"Content-Type": "application/json"}
    payload = {"message": texto}
    
    try:
        resposta = requests.post(url, headers=headers, data=json.dumps(payload))
        return resposta.json()
    except Exception as e:
        print(f"Erro ao enviar mensagem: {e}")
        return None

# Exemplo de uso
resposta = enviar_mensagem("Preciso de uma antena para VHF")
if resposta:
    print(resposta["message"])
```

### PHP

```php
<?php
$url = 'http://localhost:3100/message';
$data = ['message' => 'Preciso de informações sobre a antena MU-55'];
$options = [
    'http' => [
        'header'  => "Content-type: application/json\r\n",
        'method'  => 'POST',
        'content' => json_encode($data)
    ]
];

$context  = stream_context_create($options);
$result = file_get_contents($url, false, $context);

if ($result === FALSE) {
    echo "Erro ao enviar mensagem";
} else {
    $response = json_decode($result, true);
    echo $response['message'];
}
?>
```

### C#

```csharp
using System;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

class Program
{
    static async Task Main()
    {
        using (var client = new HttpClient())
        {
            var payload = new
            {
                message = "Preciso de uma antena para VHF"
            };
            
            var content = new StringContent(
                JsonConvert.SerializeObject(payload),
                Encoding.UTF8,
                "application/json"
            );
            
            try
            {
                var response = await client.PostAsync("http://localhost:3100/message", content);
                response.EnsureSuccessStatusCode();
                
                var responseContent = await response.Content.ReadAsStringAsync();
                var result = JsonConvert.DeserializeObject<dynamic>(responseContent);
                
                Console.WriteLine(result.message);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"Erro ao enviar mensagem: {ex.Message}");
            }
        }
    }
}
```

## Entendendo as Consultas por Catálogo

O bot agora reconhece diversas formas de pedir catálogos de produtos:

### Palavras-chave reconhecidas:

- **Catálogo**: "catálogo", "catalogo"
- **Lista**: "lista", "listagem", "me mostre", "todos", "todas"
- **Categorias**: "antena", "antenas", "duplexador", "duplexadores", "conector", "conectores", "cabo", "cabos"

### Exemplos de perguntas funcionais:

- "Me dê o catálogo de antenas"
- "Lista todas as antenas"
- "Mostre todos os duplexadores"
- "Catálogo de conectores"
- "Quais antenas vocês têm?"
- "Lista de produtos disponíveis"

### Resposta organizada:

- **Por subcategorias**: Móveis, Fixas, Plano-Terra, Heliflex, Marítimas
- **Informações essenciais**: Nome, modelo, código, frequência, URL
- **Formato limpo**: Numeração e emojis para facilitar leitura

## Matriz de Testes Completa

| ID  | Categoria     | Funcionalidade            | Exemplo de Query                            | Resultado Esperado                                           | Status |
| --- | ------------- | ------------------------- | ------------------------------------------- | ------------------------------------------------------------ | :----: |
| T01 | Catálogo      | Listar antenas            | "Catálogo de antenas"                       | Lista completa de antenas com modelos e códigos              |   ✅   |
| T02 | Catálogo      | Listar conectores         | "Lista de conectores"                       | Conectores organizados por séries (N, BNC, UHF, etc.)        |   ✅   |
| T03 | Catálogo      | Listar cabos              | "Cabos disponíveis"                         | Cabos coaxiais e especificações                              |   ✅   |
| T04 | Busca         | Por código                | "Informações do código 501695"              | Especificações técnicas detalhadas do produto                |   ✅   |
| T05 | Busca         | Por frequência            | "Antena para 450 MHz"                       | Produtos compatíveis com essa frequência                     |   ✅   |
| T06 | Busca         | Por aplicação             | "Produtos para segurança pública"           | Soluções específicas para o segmento                         |   ✅   |
| T07 | Institucional | Sobre a empresa           | "História da ARS"                           | Histórico, fundação, missão e valores                        |   ✅   |
| T08 | Institucional | Certificações             | "Certificados da empresa"                   | Lista de certificações nacionais e internacionais            |   ✅   |
| T09 | Institucional | Mercado                   | "Concorrentes e diferenciais"               | Análise competitiva e vantagens                              |   ✅   |
| T10 | Técnico       | Especificações            | "Especificações da antena MU-55"            | Parâmetros elétricos, mecânicos e ambientais                 |   ✅   |
| T11 | Segmento      | Segurança Pública         | "Soluções para rádios de segurança pública" | Antenas e acessórios para TETRA, APCO e P25                  |   ✅   |
| T12 | Segmento      | Agronegócio               | "Antenas para agricultura de precisão"      | Produtos para RTK, telemetria e IoT rural                    |   ✅   |
| T13 | Segmento      | Utilities                 | "Antenas para utilities"                    | Soluções para concessionárias de energia e saneamento        |   ✅   |
| T14 | Segmento      | Transporte                | "Antenas para frotas de caminhões"          | Produtos para AVL, telemetria e comunicação móvel            |   ✅   |
| T15 | Técnico       | Compatibilidade           | "Antenas compatíveis com Motorola APX"      | Lista de produtos compatíveis com equipamentos específicos   |   ✅   |
| T16 | Técnico       | Montagem                  | "Como instalar a antena MU-55"              | Instruções de montagem e requisitos técnicos                 |   ✅   |
| T17 | Certificações | Homologações ANATEL       | "Quais produtos têm homologação ANATEL?"    | Lista de produtos homologados pela ANATEL                    |   ✅   |
| T18 | Certificações | Normas internacionais     | "Quais certificações internacionais vocês têm?" | Normas ISO, IEC e outras certificações                    |   ✅   |
| T19 | Mercado       | Análise competitiva       | "Como vocês se comparam à Aquário Antenas?" | Comparativo com principais concorrentes                      |   ✅   |
| T20 | Mercado       | Diferencial competitivo   | "Qual o diferencial da ARS no mercado?"     | Vantagens técnicas, comerciais e de suporte                  |   ✅   |

## Funcionalidades implementadas

✅ **Integração com base de dados**: O bot agora acessa informações reais dos produtos  
✅ **Busca inteligente**: Busca por nome, código, frequência e aplicação  
✅ **Catálogo de produtos**: Lista produtos por categoria (antenas, duplexadores, etc.)  
✅ **Informações contextuais**: Envia informações relevantes para cada pergunta  
✅ **Histórico de conversas**: Mantém contexto entre mensagens  
✅ **Tratamento de erros**: Resposta de fallback em caso de problemas  
✅ **Informações institucionais**: Dados sobre a empresa, certificações e diferenciais  
✅ **Análise de mercado**: Informações sobre concorrentes e posicionamento estratégico  
✅ **Segmentação por aplicação**: Recomendações baseadas em segmento de mercado

## Guia de Testes de Integração

### Preparação do Ambiente

1. Certifique-se de que o servidor está rodando: `npm start`
2. Verifique se o endpoint está respondendo: `curl http://localhost:3100/`

### Testes por Funcionalidade

#### 1. Testes de Catálogo

Execute as requisições HTTP da seção "1. Requisições de Catálogo de Produtos" e verifique:

- Que os produtos são organizados por subcategorias
- Que informações técnicas básicas são incluídas
- Que a formatação facilita a leitura

#### 2. Testes de Busca

Execute as requisições HTTP da seção "2. Buscas por Especificação" e verifique:

- Que produtos relevantes são retornados
- Que as especificações técnicas completas são mostradas
- Que há recomendações baseadas na busca

#### 3. Testes Institucionais

Execute as requisições HTTP da seção "3. Informações Institucionais" e verifique:

- Que informações sobre a empresa são precisas
- Que certificações são corretamente listadas
- Que diferenciais e posicionamento de mercado são apresentados

#### 4. Testes de Aplicação por Segmento

Execute as requisições HTTP da seção "4. Aplicações por Segmento" e verifique:

- Que produtos relevantes para cada segmento são recomendados
- Que necessidades específicas de cada setor são abordadas
- Que recomendações técnicas são adequadas ao contexto

## Testes de Integração Avançados

### Teste de Sessão e Histórico

Para testar a manutenção de contexto entre mensagens:

1. Inicie uma conversa sobre um tópico específico
2. Faça perguntas de acompanhamento sem mencionar o tópico original

Exemplo:

```http
# Primeira requisição
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Me fale sobre antenas para LTE"
}

# Segunda requisição (deve manter contexto)
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Qual é a melhor delas?"
}
```

### Teste de Fallback e Tratamento de Erros

Envie mensagens que estão fora do escopo de conhecimento do bot:

```http
POST /message HTTP/1.1
Host: localhost:3100
Content-Type: application/json

{
    "message": "Como está o clima em São Paulo hoje?"
}
```

Resposta esperada: Uma mensagem educada explicando que o bot é especializado em produtos e informações da ARS Eletrônica.

### Teste de Carga (Shell Script)

```bash
#!/bin/bash
# teste_carga.sh
# Executa 10 requisições simultâneas para testar a capacidade do servidor

for i in {1..10}
do
   curl -X POST http://localhost:3100/message \
     -H "Content-Type: application/json" \
     -d '{"message": "Me dê informações sobre antenas"}' &
done
wait

echo "Teste de carga completo"
```

### Validação de Respostas

Ao testar, verifique se as respostas:

1. São relevantes para a pergunta
2. Incluem informações técnicas precisas
3. Oferecem links ou referências quando apropriado
4. Mantêm um tom profissional e cordial
5. Respondem a todas as partes da pergunta
6. Apresentam formatação adequada (listas, emojis, etc.)

## Guia de Validação Técnica

Para cada resposta do bot, verifique:

1. **Precisão técnica**: As especificações técnicas devem corresponder aos dados reais dos produtos
2. **Completude**: Todas as informações relevantes devem estar presentes
3. **Consistência**: Respostas para perguntas similares devem ser consistentes
4. **Formatação**: Organização clara, separação por categorias, uso adequado de formatação
5. **Relevância**: A resposta deve ser diretamente relacionada à pergunta

Use a seguinte escala para avaliar cada resposta:

- ✅ Excelente: Resposta completa, precisa e bem formatada
- ⚠️ Aceitável: Resposta correta mas pode ser melhorada
- ❌ Inadequada: Resposta incorreta, incompleta ou mal formatada
