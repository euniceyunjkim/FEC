const axios = require('axios');

let getRelated = (prodID) => {
  return axios.get(`/products/${prodID}/related`)
}

let getStyle = (prodID) => {
  return axios.get(`/products/${prodID}/styles`)
}


module.exports = {
  getRelated,
  getStyle
}