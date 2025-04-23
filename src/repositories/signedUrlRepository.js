const SignedUrlModel = require('../db/models/signedUrlModel');
require('dotenv').config();

async function saveSignedUrl(signedUrl) {
    return await SignedUrlModel.create(signedUrl);
}

module.exports = { saveSignedUrl };
