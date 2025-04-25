const SignedUrlModel = require("../db/models/signedUrlModel");
require("dotenv").config();

async function saveSignedUrl(signedUrl) {
    return await SignedUrlModel.create(signedUrl);
}

async function getById(id) {
    return await SignedUrlModel.findByPk(id);
}
module.exports = { saveSignedUrl, getById };
