const { v4: uuidv4 } = require("uuid");
const { SNSClient, PublishCommand } = require("@aws-sdk/client-sns");
require("dotenv").config();

async function requestProcessing(id, fileName) {
    try {
        const params = {
            TopicArn: process.env.AWS_SNS_ARN,
            Message: JSON.stringify({
                ProcessId: id,
                VideoName: fileName,
            }),
            MessageGroupId: uuidv4(),
        };
        const command = new PublishCommand(params);

        const snsClient = new SNSClient({
            region: process.env.AWS_REGION,
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
            },
        });
        return await snsClient.send(command);
    } catch (error) {
        throw new Error("Erro ao publicar mensagem no SNS: " + error.message);
    }
}

module.exports = requestProcessing;