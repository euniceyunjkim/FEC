import React, { useState, useEffect, useContext } from 'react';
// import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';

// import fullStar from './assets/fullStar.webp';
// import halfStar from './assets/halfStar.webp';
// import emptyStar from './assets/emptyStar.webp';

const Star = function ({ rating }) {
  const renderStars = function (i) {
    const remainder = i % rating;
    if (i * 4 <= rating * 4) {
      return <Box.Star src="./assets/fullStar.webp" alt="full star" />;
    } else if (remainder === 0.5) {
      return <Box.Star src="./assets/halfStar.webp" alt="half star" />;
    } else if (remainder === 0.25) {
      return <Box.Star src="./assets/3-4Star.webp" alt="three quarters star" />;
    } else if (remainder === 0.75) {
      return <Box.Star src="./assets/1-4Star.webp" alt="quarter star" />;
    } else {
      return <Box.Star src="./assets/emptyStar.webp" alt="empty star" />;
    }
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

export default Star;
