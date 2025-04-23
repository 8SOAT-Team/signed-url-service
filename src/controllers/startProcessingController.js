const requestProcessing = require("../useCases/requestProcessing");
require("dotenv").config();

async function requestProcessingHandler(req, res) {
    const { url } = req.body;
    try {
        // const result = await requestProcessing(process.env.SQS_REGION, process.env.SQS_QUEUE_URL, url);
        // res.status(200).json(result);
        res.status(200).json({ status : 'ok'});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { requestProcessingHandler };
