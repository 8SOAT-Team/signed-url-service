const requestProcessing = require("../useCases/requestProcessing");

async function requestProcessingHandler(req, res) {
    const { id, fileName } = req.body;
    try {
        const result = await requestProcessing(id, fileName);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { requestProcessingHandler };
