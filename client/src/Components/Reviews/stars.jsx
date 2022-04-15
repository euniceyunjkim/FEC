import React from 'react';
import PropTypes from 'prop-types';
import Box from './css/container';

// render stars on page based on review being passed in
const Star = function Star({ rating }) {
  const renderStars = function renderStars(i) {
    const remainder = i % rating;
    if (i * 4 <= rating * 4) {
      return <Box.Star src="./assets/fullStar.webp" alt="full star" loading="lazy" />;
    }
    if (remainder === 0.5) {
      return <Box.Star src="./assets/halfStar.webp" alt="half star" loading="lazy" />;
    }
    if (remainder === 0.25) {
      return <Box.Star src="./assets/3-4Star.webp" alt="three quarters star" loading="lazy" />;
    }
    if (remainder === 0.75) {
      return <Box.Star src="./assets/1-4Star.webp" alt="quarter star" loading="lazy" />;
    }
    return <Box.Star src="./assets/emptyStar.webp" alt="empty star" loading="lazy" />;
  };
  return (
    <div>
      {renderStars(1)}
      {renderStars(2)}
      {renderStars(3)}
      {renderStars(4)}
      {renderStars(5)}
    </div>
  );
};
Star.propTypes = {
  rating: PropTypes.number.isRequired,
};
export default Star;
