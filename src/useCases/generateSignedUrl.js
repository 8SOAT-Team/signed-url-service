const { v4: uuidv4 } = require('uuid');
const s3 = require('../config/s3Client');
const repository = require('../repositories/signedUrlRepository');

async function generateSignedUrl(bucketName, key, expiresIn) {
    const params = { Bucket: bucketName, Key: key, Expires: expiresIn };

    try {
        const url = await s3.getSignedUrlPromise('putObject', params);
        const signedUrl = { id: uuidv4(), url, createdAt: new Date() };
        await repository.saveSignedUrl(signedUrl);
        return signedUrl;
    } catch (error) {
        throw new Error('Erro ao gerar URL assinada: ' + error.message);
    }
}

module.exports = generateSignedUrl;
