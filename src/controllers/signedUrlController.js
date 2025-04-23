const generateSignedUrl = require('../useCases/generateSignedUrl');

async function signedUrlHandler(req, res) {
    const { bucketName, key, expiresIn, fileType } = req.body;

    try {
        const signedUrl = await generateSignedUrl(bucketName, key, expiresIn, fileType);
        res.status(201).json(signedUrl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { signedUrlHandler };
