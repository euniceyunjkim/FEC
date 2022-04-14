const ProductRouters = require('express').Router();
const axios = require('axios');
const config = require('../../config');

const path = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products';

ProductRouters.get('/', (req, res) => {
  axios.get(path, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.send(data.data))
    .catch((err) => new Error('err 1st fetch', err));
});

ProductRouters.get('/:product_id/related', (req, res) => {
  axios.get(`${path}/${req.params.product_id}/related`, { headers: { Authorization: config.TOKEN } })
    .then((data) => (Promise.all(
      data.data.map((id) => axios.get(`${path}/${id}`, { headers: { Authorization: config.TOKEN } }).then((response) => response.data)),
    ))
      .then((prodArr) => res.send(prodArr))
      .catch((err) => res.send(err)));
});

ProductRouters.get('/:product_id/styles', (req, res) => {
  axios.get(`${path}/${req.query.product_id}/styles`, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.send(data.data))
    .catch((err) => new Error('err fetching styles', err));
});

ProductRouters.get('/:product_id', (req, res) => {
  axios.get(`${path}/${req.params.product_id}`, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.send(data.data))
    .catch((err) => new Error('err fetching itemdeets', err));
});

module.exports = ProductRouters;
