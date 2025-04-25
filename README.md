# 📁 Signed URL Service

Este serviço é responsável por gerar URLs assinadas para upload seguro de arquivos no Amazon S3 e iniciar o processo de processamento de vídeos de forma assíncrona. Ele faz parte de um projeto de pós-graduação que utiliza uma arquitetura de microsserviços para processamento de vídeos.

## 🚀 Funcionalidades

- **Geração de URL assinada:** Fornece uma URL temporária para upload de arquivos diretamente no S3.
- **Início do processamento:** Após o upload, envia uma mensagem para uma fila SQS indicando que o arquivo está pronto para ser processado.

## 🛠️ Tecnologias Utilizadas

- **Node.js 18**
- **Express**
- **Sequelize (ORM)**
- **PostgreSQL**
- **AWS SDK (S3 e SQS)**
- **Docker & Docker Compose**

## ⚙️ Configuração de Variáveis com `.env`

Crie um arquivo `.env` na raiz do projeto com base no `.env-example`:

```env
PORT=3000
DB_HOST=db
DB_PORT=5432
DB_NAME=signedurls
DB_USER=user
DB_PWD=password
AWS_ACCESS_KEY_ID=your-access-key-id
AWS_SECRET_ACCESS_KEY=your-secret-access-key
AWS_REGION=us-east-1
S3_BUCKET_NAME=your-s3-bucket-name
SQS_URL=https://sqs.us-east-1.amazonaws.com/000000000000/your-queue-name
```

⚠️ **Importante:** Não versionar o `.env`. Use o `.env-example` como referência para outros devs.

## 📦 Instalação e Execução com Docker Compose

### 1. Clone o repositório

```bash
git clone https://github.com/8SOAT-Team/signed-url-service.git
cd signed-url-service
```

### 2. Crie e edite o `.env`

```bash
cp .env-example .env
# edite o arquivo com suas credenciais
```

### 3. Execute a aplicação

```bash
docker-compose up --build
```

A aplicação ficará disponível em `http://localhost:3000`.

## 📚 Endpoints da API

### 1. Gerar URL Assinada

- **Endpoint:** `POST /api/signed-url`
- **Corpo da requisição:**

```json
{
  "fileName": "exemplo.mp4",
  "fileType": "video/mp4"
}
```

### 2. Iniciar Processamento

- **Endpoint:** `POST /api/start-processing`
- **Corpo da requisição:**

```json
{
  "id": "uuid-do-arquivo"
}
```

## Diagrama da Arquitetura de Infraestrutura

![Diagrama da Arquitetura de Infraestrutura](/FastVideo.drawio.png)


## Estrutura do Projeto

```
signed-url-service
├── src
│   ├── config
│   ├── controllers
│   ├── db
│   ├── entities
│   ├── repositories
│   ├── routes
│   ├── useCases
│   └── server.js
├── .env-example
├── package.json
└── README.md
```

## 👥 Contribuidores

- André Bessa – RM 357159  
- Fernanda Beato – RM 357346  
- Felipe Bergmann – RM 357042  
- Darlei Randel – RM 356751  
- Victor Oliver – RM 357451