// to render stars using this file import this and call <RenderRating prodID={ -Insert ID- } />
import React, { useState, useEffect } from 'react';
// import currentProducts from '../../Contexts/CurProdContext';
import Star from './Reviews/stars.jsx';

const axios = require('axios');

const RenderRating = function RenderRating({ prodID }) {
  const [rating, setRating] = useState(0);
  // const { currentProd } = useContext(currentProducts);
  // calculate ratings of givin id data
  const avreageRating = function sum(ratings) {
    let totalVotes = 0;
    let totalStarts = 0;
    for (let i = 1; i < 6; i += 1) {
      // had to include a multiply by 1 to make value at as an int and not a string
      if (ratings[i]) {
        totalVotes += ratings[i] * 1;
        totalStarts += ratings[i] * i;
      }
    }
    // this is async
    setRating((Math.round((totalStarts / totalVotes) * 4)) / 4);
  };

  // a function to get the and create the ratings of any given ID
  const getRatings = function getRatings(id) {
    axios.get(`/reviews/meta?product_id=${id}`)
      .then((res) => {
        avreageRating(res.data.ratings);
      })
      .catch(() => console.log('error in axios (./client/src/Components/renderRatings.jsx)'));
  };
  // loads in and get the rating of the first product
  useEffect(() => {
    if (prodID) {
      getRatings(prodID);
    }
  }, [prodID]);
  // renders the rating in number form if a value is passed in for loadRating
  return (
    <div>
      <Star rating={rating} />
    </div>
  );
};

export default RenderRating;
