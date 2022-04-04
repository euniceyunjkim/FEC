import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import Star from './stars.jsx';

const axios = require('axios');

const RaitingSum = function ({ loadRatings, prodID }) {
  console.log(loadRatings);
  const [rating, setRating] = useState(0);
  const { currentProd } = useContext(currentProducts);
  // calculate ratings of givin id data
  const avreageRating = function sum(ratings) {
    let totalVotes = 0;
    let totalStarts = 0;
    for (let i = 1; i < 6; i += 1) {
      // had to include a multiply by 1 to make value at as an int and not a string
      totalVotes += ratings[i] * 1;
      totalStarts += ratings[i] * i;
    }
    // this is async
    setRating((Math.round((totalStarts / totalVotes) * 2)) / 2);
  };
  // a function to get the and create the ratings of any given ID
  const getRatings = function (id) {
    axios.get(`http://localhost:3000/reviews/meta?product_id=${id}`)
      .then((res) => {
        avreageRating(res.data.ratings);
      })
      .catch(() => console.log('error in axios'));
  };
  // loads in and get the rating of the first product
  useEffect(() => {
    console.log(currentProd);
    if (currentProd.id) {
      getRatings(currentProd.id);
    }
  }, [currentProd]);
  // renders the rating in number form if a value is passed in for loadRating
  const renderNum = function () {
    if (loadRatings) {
      return <h1>{rating}</h1>;
    }
  };
  // a function to render the stars from another file.
  const renderStars = function () {
    return <div>*</div>;
  };
  return (
    <div>
      {renderNum()}
      <Star rating={rating} />
    </div>

  );
};

export default RaitingSum;
