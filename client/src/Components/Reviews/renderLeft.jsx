import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';
import Star from './stars.jsx';

const axios = require('axios');

const RenderLeft = function () {
  const [rating, setRating] = useState(0);
  const [recommended, setRecommended] = useState(0);
  const { currentProd } = useContext(currentProducts);
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
    setRating((Math.round((totalStarts / totalVotes) * 2)) / 2);
  };
  const saveRecommended = function (rec) {
    const total = (rec.false * 1) + (rec.true * 1);
    console.log((Math.round(100 * (rec.true / total))));
    setRecommended(Math.round(100 * (rec.true / total)));
  };
  // a function to get the and create the ratings of any given ID
  const getRatings = function (id) {
    axios.get(`http://localhost:3000/reviews/meta?product_id=${id}`)
      .then((res) => {
        console.log(res.data);
        avreageRating(res.data.ratings);
        saveRecommended(res.data.recommended);
      })
      .catch(() => console.log('error in axios'));
  };
  // loads in and get the rating of the first product
  useEffect(() => {
    if (currentProd.id) {
      getRatings(currentProd.id);
    }
  }, [currentProd]);
  // renders the rating in number form if a value is passed in for loadRating
  const renderNum = function () {
    return <Box.Rating>{rating}</Box.Rating>;
  };
  const renderRest = function () {
    return (
      <div>
        <p>
          {recommended}
          % of reviews recommend this product
        </p>
        <ul>
          <ol>5stars</ol>
          <ol>4stars</ol>
          <ol>3stars</ol>
          <ol>2stars</ol>
          <ol>1stars</ol>
        </ul>
        <h3>characteristics</h3>
      </div>
    );
  };
  return (
    <Box.InnerCol>
      <Box.Container>
        {renderNum()}
        <Star rating={rating} />
      </Box.Container>
      {renderRest()}
    </Box.InnerCol>
  );
};
export default RenderLeft;
