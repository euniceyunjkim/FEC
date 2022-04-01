const axios = require('axios');

let getRelated = (prodID) => {
  return axios.get(`/products/${prodID}/related`)
}


module.exports = {
  getRelated
}