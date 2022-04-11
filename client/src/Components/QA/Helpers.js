const axios = require('axios');

function getQuestions(prodId, page, count) {
  return axios.get('qa/questions', { params: { product_id: prodId, page, count } });
}

// function postQuestion(data) {

// }

module.exports = {
  getQuestions,
};
// QARouters.get('/questions', (req, res) => {
//   axios.get(`${path}/questions`, { headers: { Authorization: config.TOKEN }, params: { product_id: req.query.product_id } })
//     .then((data) => res.send(data.data))
//     .catch((err) => res.send(err));
// });

// QARouters.get('/questions/:question_id/answers', (req, res) => {
//   axios.get(`${path}/questions/${req.params.question_id}/answers`, { headers: { Authorization: config.TOKEN } })
//     .then((data) => res.send(data.data))
//     .catch((err) => res.send(err));
// });

// QARouters.post('/questions', (req, res) => {
//   axios.post(`${path}/questions`, req.body, { headers: { Authorization: config.TOKEN } })
//     .then((data) => res.send(data.data))
//     .catch((err) => res.send(err));
// });

// QARouters.post('/questions/:question_id/answers', (req, res) => {
//   axios.post(`${path}/questions/${req.params.question_id}/answers`, req.body, { headers: { Authorization: config.TOKEN } })
//     .then((data) => res.send(data.data))
//     .catch((err) => res.send(err));
// });

// QARouters.put('/questions/:question_id/helpful', (req, res) => {
//   axios.put(`${path}/questions/${req.params.question_id}/helpful`, {}, { headers: { Authorization: config.TOKEN } })
//     .then((data) => res.status(data.status).send())
//     .catch((err) => res.send(err));
// });

// QARouters.put('/questions/:question_id/report', (req, res) => {
//   axios.put(`${path}/questions/${req.params.question_id}/report`, {}, { headers: { Authorization: config.TOKEN } })
//     .then((data) => res.status(data.status).send())
//     .catch((err) => res.send(err));
// });

// QARouters.put('/answers/:answer_id/helpful', (req, res) => {
//   axios.put(`${path}/answers/${req.params.answer_id}/helpful`, {}, { headers: { Authorization: config.TOKEN } })
//     .then((data) => res.status(data.status).send())
//     .catch((err) => res.send(err));
// });

// QARouters.put('/answers/:answer_id/report', (req, res) => {
//   axios.put(`${path}/answers/${req.params.answer_id}/report`, {}, { headers: { Authorization: config.TOKEN } })
//     .then((data) => res.status(data.status).send())
//     .catch((err) => res.send(err));
// });