const axios = require('axios');

const getRelated = (prodID) => axios.get(`/products/${prodID}/related`);

const getStyle = (prodID) => axios.get('products/:product_id/styles', { params: { product_id: prodID } });

const postOutfit = (tuple) => axios.post('/newoutfit', tuple);

const getOutfits = () => axios.get('/newoutfit');

const removeOutfit = (id) => axios.delete(`/newoutfit/${id}`);

const getInfo = (id) => axios.get(`/products/${id}`);

module.exports = {
  getRelated,
  getStyle,
  postOutfit,
  getOutfits,
  removeOutfit,
  getInfo,
};
