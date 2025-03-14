require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PWD, {
    dialect: 'postgres',
    port: process.env.DB_PORT,
    ssl: true,
    dialectOptions: {
        clientMinMessages: 'notice',
    }
});

module.exports = sequelize;