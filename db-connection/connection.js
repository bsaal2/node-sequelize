const { Sequelize } = require('sequelize');
require('dotenv').config();

const SequelizeConnectionObj = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
});

const connectToDB = async () => {
    await SequelizeConnectionObj.authenticate();
    await SequelizeConnectionObj.sync();
    console.log(`connected to db: ${process.env.DB_NAME}`);
}

module.exports = {
    SequelizeConnectionObj,
    connectToDB,
}