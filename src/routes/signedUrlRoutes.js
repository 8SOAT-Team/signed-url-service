const express = require('express');
const { signedUrlHandler } = require('../controllers/signedUrlController');

const router = express.Router();
router.post('/signed-url', signedUrlHandler);

module.exports = router;
