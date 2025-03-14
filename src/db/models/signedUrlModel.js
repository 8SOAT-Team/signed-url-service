const { DataTypes } = require('sequelize');
const sequelize = require('../../config/database');

const SignedUrlModel = sequelize.define('SignedUrl', {
    id: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4, primaryKey: true },
    url: { type: DataTypes.TEXT, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
});

module.exports = SignedUrlModel;