const generateSignedUrl = require('../useCases/generateSignedUrl');

async function signedUrlHandler(req, res) {
    const { fileName, fileType } = req.body;

    try {
        const signedUrl = await generateSignedUrl(fileName, fileType);
        res.status(201).json(signedUrl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { signedUrlHandler };
