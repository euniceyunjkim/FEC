const axios = require('axios');

let getRelated = (prodID) => {
  return axios.get(`/products/${prodID}/related`, )
}

let getStyle = (prodID) => {
  return axios.get(`products/:product_id/styles`, { params: { product_id: prodID }})
}

let postOutfit = (tuple) => {
  return axios.post('/newoutfit', tuple);
}

let getOutfits = () => {
  return axios.get('/newoutfit');
}

let removeOutfit = (id) => {
  return axios.delete(`/newoutfit/${id}`);
}

let getInfo = (id) => {
  return axios.get(`/products/${id}`);
}

module.exports = {
  getRelated,
  getStyle,
  postOutfit,
  getOutfits,
  removeOutfit,
  getInfo
}