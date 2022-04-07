const ReviewRouters = require('express').Router();
const axios = require('axios');
const config = require('../../config');

const path = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/reviews';

ReviewRouters.get('/', (req, res) => {
  axios.get(path, {
    headers: { Authorization: config.TOKEN },
    params: {
      product_id: req.query.product_id,
      page: req.query.page,
      count: req.query.count,
      sort: req.query.sort,
    },
  })
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

ReviewRouters.get('/meta', (req, res) => {
  axios.get(`${path}/meta`, { headers: { Authorization: config.TOKEN }, params: { product_id: req.query.product_id } })
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

ReviewRouters.put('/:review_id/helpful', (req, res) => {
  axios.put(`${path}/${req.params.review_id}/helpful`, {}, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.status(data.status))
    .catch((err) => res.send(err))
    .then(() => res.end());
});

ReviewRouters.put('/:review_id/report', (req, res) => {
  axios.put(`${path}/${req.params.review_id}/report`, {}, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.status(data.status))
    .catch((err) => res.status(err))
    .then(() => res.end());
});

ReviewRouters.post('/reviews', (req, res) => {
  axios.post(`${path}/reviews/${req.params.review_id}`, req.body, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.status(data.status))
    .catch((err) => res.send(err))
    .then(() => res.end());
});

module.exports = ReviewRouters;
