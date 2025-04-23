const { SQSClient, SendMessageCommand } = require("@aws-sdk/client-sqs");

async function requestProcessing(region, queueUrl, signedUrl) {
    const sqsClient = new SQSClient({ region: region });
    const params = {
        QueueUrl: queueUrl,
        MessageBody: JSON.stringify({
            id: signedUrl,
        }),
    };

    try {
        const response = await sqsClient.send(new SendMessageCommand(params));
        console.log("response sendMessage:", response);
        return response;
    } catch (error) {
        throw new Error(
            "Erro ao gerar postar mensagem na fila: " + error.message
        );
    }
}

module.exports = { requestProcessing };
