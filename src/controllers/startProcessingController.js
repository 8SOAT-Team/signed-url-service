const requestProcessing = require("../useCases/requestProcessing");
const repository = require("../repositories/signedUrlRepository");

async function requestProcessingHandler(req, res) {
    const { id } = req.body;
    try {
        if (!id) {
            res.status(400).json({ erro: "id é obrigatório" });
            return;
        }
        const signedUrl = await repository.getById(id);
        if (!signedUrl) {
            res.status(400).json({ erro: "registro não encontrado"});
            return;
        }

        const result = await requestProcessing(id, signedUrl.fileName);
        if (result.error) {
            res.status(400).json(result);
            return;
        }

        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { requestProcessingHandler };