const axios = require('axios');

let getRelated = (prodID) => {
  return axios.get(`/products/${prodID}/related`, )
}

let getStyle = (prodID) => {
  return axios.get(`products/:product_id/styles`, { params: { product_id: prodID }})
}


module.exports = {
  getRelated,
  getStyle
}