const ProductRouters = require('express').Router();
const axios = require('axios');

const headers = { headers: { Authorization: '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' } };

const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products';

ProductRouters.get('/', (req, res) => {
  axios.get(`${url}`, headers)
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

ProductRouters.get('/:product_id/styles', (req, res) => {
  // console.log(req.query.product_id);
  axios.get(`${url}/${req.query.product_id}/styles`, headers)
    .then((styles) => res.send(styles.data))
    .catch((err) => console.log('err from router', err));
});

module.exports = ProductRouters;
