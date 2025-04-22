# Signed URL Service

Este é um microserviço para gerar URLs assinadas no Amazon S3 e armazená-las no PostgreSQL.

## Como rodar

1. Configure as variáveis no `.env`
2. Rode com Docker:
   ```sh
   docker-compose up --build
   ```
3. Teste a API via Postman ou cURL:
   ```sh
   curl -X POST http://localhost:3000/api/signed-url -d '{ "bucketName": "meu-bucket", "key": "arquivo.txt", "expiresIn": 3600 }' -H "Content-Type: application/json"
   ```


## Diagrama da Arquitetura de Infraestrutura
![Diagrama da Arquitetura de Infraestrutura](/FastVideo.drawio.png)


## Autores
### Fiap turma 8SOAT - Grupo 7

- André Bessa - RM357159
- Fernanda Beato - RM357346
- Felipe Bergmann - RM357042
- Darlei Randel - RM356751
- Victor Oliver - RM357451
