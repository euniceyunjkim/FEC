import React from 'react';
import currentProducts from '../../Contexts/CurProdContext';

const axios = require('axios');

const RaitingSum = function rating() {
  const avreageRating = function sum() {
    axios.get(`http://localhost:3000/reviews/meta?product_id=40344`)
      .then((res) => {
        console.log(res.data);
      })
      .catch(() => console.log('error in axios'));
  };
  return (
    <h1 onClick={() => avreageRating()}>hello from raitingSum</h1>
  );
};

export default RaitingSum;
