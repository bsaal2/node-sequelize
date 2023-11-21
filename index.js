const express = require('express');
const { connectToDB } = require('./db-connection/connection');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const { create_brands, fetch_brands } = require('./services/dbService');

app.get('/brands', async (req, res) => {
    const brands = await fetch_brands();

    return res.status(200).json(brands);
})

app.post('/brands', async (req, res) => {
    const brand = await create_brands(req.body);

    res.status(201).json(brand);
})

connectToDB();

app.listen(+process.env.PORT, () => {
    console.log(`App is listening on port: ${process.env.PORT}`);
})