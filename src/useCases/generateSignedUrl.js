const { v4: uuidv4 } = require("uuid");
const s3 = require("../config/s3Client");
const repository = require("../repositories/signedUrlRepository");
require("dotenv").config();

async function generateSignedUrl(fileName, fileType) {
    const recordId = uuidv4();
    const params = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: recordId + "/" + fileName,
        Expires: 3600,
        ContentType: fileType,
    };

    try {
        const url = await s3.getSignedUrl("putObject", params);
        const signedUrl = { id: recordId, url: url, createdAt: new Date() };
        await repository.saveSignedUrl(signedUrl);
        return signedUrl;
    } catch (error) {
        throw new Error("Erro ao gerar URL assinada: " + error.message);
    }
}

module.exports = generateSignedUrl;
