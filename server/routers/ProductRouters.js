const ProductRouters = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const headers = { headers: { Authorization: config.TOKEN } };

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products';

ProductRouters.get('/', (req, res) => {
  axios.get(`${url}`, headers)
    .then((data) => res.send(data.data))
    .catch((err) => console.log('err 1st get', err));
});

ProductRouters.get('/:product_id/styles', (req, res) => {
  // console.log(req.query.product_id);
  axios.get(`${url}/${req.query.product_id}/styles`, headers)
    .then((styles) => res.send(styles.data))
    .catch((err) => console.log('err from router', err));
});

module.exports = ProductRouters;
