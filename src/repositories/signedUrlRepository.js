const SignedUrlModel = require('../db/models/signedUrlModel');
require('dotenv').config();

async function saveSignedUrl(signedUrl) {
    console.log('process.env.DB_NAME: ' , process.env.DB_NAME);
    return await SignedUrlModel.create(signedUrl);
}

module.exports = { saveSignedUrl };
