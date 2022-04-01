const InteractionRouters = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

let path = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/interactions';

//double check how to pass in body parameters
InteractionRouters.post('/', (req, res) => {
  axios.post(path, req.body, {headers: {Authorization: config.TOKEN}})
  .then((data) => res.send(data.data))
  .catch((err) => res.send(err))
})

module.exports = InteractionRouters;
