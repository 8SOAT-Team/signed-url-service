const { v4: uuidv4 } = require("uuid");
const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");
require("dotenv").config();

async function requestProcessing(id, fileName) {
    try {
        const params = {
            QueueUrl: process.env.SQS_URL,
            MessageBody: JSON.stringify({
                ProcessId: id,
                VideoName: fileName, 
            }),
            MessageGroupId: uuidv4(), 
        };
        const command = new SendMessageCommand(params);

        const sqsClient = new SQSClient({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
            },
        }); 
        return await sqsClient.send(command);
    } catch (error) {
        throw new Error("Erro ao publicar mensagem no SQS: " + error.message);
    }
}

module.exports = requestProcessing;
