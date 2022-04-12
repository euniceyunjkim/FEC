const CartRouters = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

let path = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/cart';

CartRouters.get('/', (req, res) => {
  axios.get(path, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

CartRouters.post('/', (req, res) => {
  axios.post(path, req.body, { headers: { Authorization: config.TOKEN } })
    .then(() => res.status(201).end())
    .catch((err) => res.send(err));
});

module.exports = CartRouters;
