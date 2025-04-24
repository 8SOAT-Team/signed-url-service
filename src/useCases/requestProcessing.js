const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");
require("dotenv").config();

async function requestProcessing(id, fileName) {
    const sqsClient = new SQSClient({
        region: process.env.AWS_REGION,
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID,
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
        },
    });
    const params = {
        QueueUrl: process.env.SQS_URL,
        MessageBody: JSON.stringify({
            ProcessId: id,
            VideoName: fileName,
        }),
        MessageGroupId: id
    };

    try {
        const response = await sqsClient.send(new SendMessageCommand(params));
        console.log("response sendMessage:", response);
        return response;
    } catch (error) {
        throw new Error(
            "Erro ao postar mensagem na fila: " + error.message
        );
    }
}
module.exports = requestProcessing;