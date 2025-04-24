
# 💡 Introdução

## Objetivo ##

Este repositório contém um microserviço desenvolvido em **Node.js** utilizando **Express** para disponibilizar dois endpoints REST. Ele permite a geração de URLs assinadas para upload de arquivos em um bucket da AWS S3 e o disparo de uma mensagem para a AWS SQS para início de um processamento assíncrono.

---

## 🛠️ Como rodar o projeto localmente

### Pré-requisitos

- Git
- Node.js (versão recomendada: 18+)
- Conta e credenciais configuradas da AWS (com acesso ao S3 e SQS)

### Passos

1. Clone o repositório:

```bash
git clone https://github.com/8SOAT-Team/signed-url-service
cd signed-url-service
```

2. Crie o arquivo `.env` com base no `.env-example`:

```bash
cp .env-example .env
```

3. Instale as dependências:

```bash
npm install
```

4. Inicie a aplicação:

```bash
npm start
```

---

## 🧩 Endpoints ##

### 1. `POST /api/signed-url`

Gera uma URL assinada para upload de arquivos no S3.

- **Body (JSON):**
```json
{
  "fileName": "exemplo.pdf",
  "fileType": "application/pdf"
}
```

- **Resposta (JSON):**
```json
{
  "id": "1234567890abcdef",
  "url": "https://s3.amazonaws.com/seu-bucket/uploads/exemplo.pdf?AWSAccessKeyId=...",
  "createdAt": "2025-04-23T15:00:00.000Z"
}
```

---

### 2. `POST /api/start-processing`

Dispara o início do processamento enviando uma mensagem para uma fila SQS.

- **Body (JSON):**
```json
{
  "id": "1234567890abcdef"
}
```

➡️ Repositório do microserviço de processamento: https://github.com/8SOAT-Team/media-video-screenshot-processor

---

## 🗺️ Diagrama da Arquitetura de Infraestrutura

![Diagrama da Arquitetura de Infraestrutura](/FastVideo.drawio.png)

---

## 📂 Estrutura do Projeto (resumida)

```
📦 signed-url-service
├── 📁 src
│   ├── 📁 config
│   ├── 📁 controllers
│   ├── 📁 db
│   ├── 📁 entities
│   ├── 📁 repositories
│   ├── 📁 routes
│   ├── 📁 useCases
│   └── server.js
├── .env-example
├── package.json
└── README.md
```

---

## Autores
### Fiap turma 8SOAT - Grupo 7

- André Bessa - RM357159
- Fernanda Beato - RM357346
- Felipe Bergmann - RM357042
- Darlei Randel - RM356751
- Victor Oliver - RM357451
