import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';
import Star from './stars';
import RatingSpread from './ratingSpread';
import Characteristics from './characteristics';

const axios = require('axios');

const RenderLeft = function RenderLeft(
  {
    ratingCount, setRatingCount, characteristics, setCharacteristics,
  },
) {
  // used to keep track of ratings
  const [rating, setRating] = useState(0);
  // used for rendering the percent of people that recomend the product
  const [recommended, setRecommended] = useState(0);
  // used to axios product of intrest
  const { currentProd } = useContext(currentProducts);
  // used for rendering the star spread section
  const [starSpread, setStarSpread] = useState({});
  const [max, setMax] = useState(100);
  // calculate ratings of givin id data
  const avreageRating = function sum(ratings) {
    let totalVotes = 0;
    let totalStarts = 0;
    let tempMax = 0;
    setStarSpread(ratings);
    for (let i = 1; i < 6; i += 1) {
      // had to include a multiply by 1 to make value at as an int and not a string
      if (tempMax < (ratings[i] * 1)) {
        tempMax = ratings[i];
      }
      if (ratings[i]) {
        totalVotes += ratings[i] * 1;
        totalStarts += ratings[i] * i;
      }
    }
    setRatingCount(totalVotes);
    setMax(tempMax);
    // this is async
    setRating((Math.round((totalStarts / totalVotes) * 4)) / 4);
  };
  const saveRecommended = function saveRecommended(rec) {
    const total = (rec.false * 1) + (rec.true * 1);
    setRecommended(Math.round(100 * (rec.true / total)));
  };
  // a function to get the and create the ratings of any given ID
  const getRatings = function getRatings(id) {
    axios.get(`reviews/meta?product_id=${id}`)
      .then((res) => {
        avreageRating(res.data.ratings);
        saveRecommended(res.data.recommended);
        setCharacteristics(res.data.characteristics);
      })
      .catch((err) => new Error(err));
  };
  // loads in and get the rating of the first product
  useEffect(() => {
    if (currentProd.id) {
      getRatings(currentProd.id);
    }
  }, [currentProd]);
  // renders the rating in number form if a value is passed in for loadRating
  const renderNum = function renderNum() {
    return <Box.Rating>{rating}</Box.Rating>;
  };
  // renders the amount of people that recommend this product
  const renderRec = function renderRec() {
    return (
      <div>
        <p>
          {recommended}
          % of reviews recommend this product
        </p>
      </div>
    );
  };

  return (
    <Box.InnerCol>
      <Box.Container>
        {renderNum()}
        <Star rating={rating} />
      </Box.Container>
      {renderRec()}
      <RatingSpread ratingCount={ratingCount} stars={starSpread} max={max} />
      <div style={{ fontSize: 'larger' }}>Characteristics</div>
      <br />
      {Object.keys(characteristics).map((e) => (
        <Characteristics key={characteristics[e].id} lable={e} value={characteristics[e].value} />
      ))}
    </Box.InnerCol>
  );
};
RenderLeft.propTypes = {
  setCharacteristics: PropTypes.func.isRequired,
  ratingCount: PropTypes.number.isRequired,
  setRatingCount: PropTypes.func.isRequired,
  characteristics: PropTypes.instanceOf(Object).isRequired,
};
export default RenderLeft;
