const generateSignedUrl = require("../useCases/generateSignedUrl");

async function signedUrlHandler(req, res) {
    const { fileName, fileType } = req.body;

    try {
        if (!fileName) {
            res.status(400).json({ erro: "fileName é obrigatório" });
            return;
        }

        if (!fileType) {
            res.status(400).json({ erro: "fileType é obrigatório" });
            return;
        }
        
        const signedUrl = await generateSignedUrl(fileName, fileType);
        res.status(201).json(signedUrl);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { signedUrlHandler };
