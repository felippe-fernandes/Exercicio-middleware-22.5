const express = require('express')
const routes = express.Router();
const Products = require('../data/Products')
const validation = require('../middlewares/Validation')

routes.get('/sales', function (req, res, next) {
    res.status(200).json(Products);
});

routes.post('/sales', validation, function (req, res) {
    const {productName, infos:{saleDate, warrantyPeriod}} = req.body;
    Products.push({productName, infos:{saleDate, warrantyPeriod }})
    res.status(201).json({message: 'Venda cadastrada com sucesso'})
});

module.exports = routes