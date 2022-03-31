const ProductRouters = require('express').Router();
const axios = require('axios');

ProductRouters.get('/', (req, res) => {
  axios.get('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/products', {headers: {Authorization: 'Put TOKEN HERE'}})
  .then((data) => res.send(data.data))
  .catch((err) => res.send(err))
})

module.exports = ProductRouters;
