import React, { useState, useEffect, useContext } from 'react';
// import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';

// import fullStar from './assets/fullStar.png';
// import halfStar from './assets/halfStar.png';
// import emptyStar from './assets/emptyStar.png';

const Star = function ({ rating }) {
  const renderStars = function (i) {
    const remainder = i % rating;
    if (i * 4 <= rating * 4) {
      return <Box.Star src="./assets/fullStar.png" alt="full star" />;
    } else if (remainder === 0.5) {
      return <Box.Star src="./assets/halfStar.png" alt="half star" />;
    } else if (remainder === 0.25) {
      return <Box.Star src="./assets/3-4Star.png" alt="three quarters star" />;
    } else if (remainder === 0.75) {
      return <Box.Star src="./assets/1-4Star.png" alt="quarter star" />;
    } else {
      return <Box.Star src="./assets/emptyStar.png" alt="empty star" />;
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
