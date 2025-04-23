const express = require('express');
const { requestProcessingHandler } = require('../controllers/startProcessingController'); 

const router = express.Router();
router.post('/start-processing', requestProcessingHandler);

module.exports = router;