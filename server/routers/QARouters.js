const QARouters = require('express').Router();
const axios = require('axios');
const config = require('../../config.js');

const path = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfp/qa';

QARouters.get('/questions', (req, res) => {
  axios.get(`${path}/questions`, { headers: { Authorization: config.TOKEN }, params: { product_id: req.query.product_id, count: req.query.count, page: req.query.page } })
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

QARouters.get('/questions/:question_id/answers', (req, res) => {
  axios.get(`${path}/questions/${req.params.question_id}/answers`, { headers: { Authorization: config.TOKEN }, params: { count: req.query.count, page: req.query.page } })
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

QARouters.post('/questions', (req, res) => {
  axios.post(`${path}/questions`, req.body, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.send(data.data))
    .catch((err) => { console.log(err); res.send(err); });
});

QARouters.post('/questions/:question_id/answers', (req, res) => {
  axios.post(`${path}/questions/${req.params.question_id}/answers`, req.body, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.send(data.data))
    .catch((err) => res.send(err));
});

QARouters.put('/questions/:question_id/helpful', (req, res) => {
  axios.put(`${path}/questions/${req.params.question_id}/helpful`, {}, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.status(data.status).send())
    .catch((err) => res.send(err));
});

QARouters.put('/questions/:question_id/report', (req, res) => {
  axios.put(`${path}/questions/${req.params.question_id}/report`, {}, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.status(data.status).send())
    .catch((err) => res.send(err));
});

QARouters.put('/answers/:answer_id/helpful', (req, res) => {
  axios.put(`${path}/answers/${req.params.answer_id}/helpful`, {}, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.status(data.status).send())
    .catch((err) => res.send(err));
});

QARouters.put('/answers/:answer_id/report', (req, res) => {
  axios.put(`${path}/answers/${req.params.answer_id}/report`, {}, { headers: { Authorization: config.TOKEN } })
    .then((data) => res.status(data.status).send())
    .catch((err) => res.send(err));
});

module.exports = QARouters;
