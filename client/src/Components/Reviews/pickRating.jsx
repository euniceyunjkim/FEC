import React from 'react';
import PropTypes from 'prop-types';
import Box from './css/container';

// creates interactive 5 star rating system
const PickStar = function PickStar({ rating, setRating }) {
  return (
    <div>
      {rating > 0
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(1)} loading="lazy" />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(1)} loading="lazy" />}
      {rating > 1
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(2)} loading="lazy" />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(2)} loading="lazy" />}
      {rating > 2
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(3)} loading="lazy" />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(3)} loading="lazy" />}
      {rating > 3
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(4)} loading="lazy" />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(4)} loading="lazy" />}
      {rating === 5
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(5)} loading="lazy" />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(5)} loading="lazy" />}
    </div>
  );
};
PickStar.propTypes = {
  rating: PropTypes.number.isRequired,
  setRating: PropTypes.func.isRequired,
};
export default PickStar;
