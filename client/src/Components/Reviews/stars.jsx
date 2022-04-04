import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
// import fullStar from './assets/fullStar.png';
// import halfStar from './assets/halfStar.png';
// import emptyStar from './assets/emptyStar.png';

const Star = function bob({ rating }) {
  const renderStars = function (i) {
    if (i <= rating) {
      return <img src="./assets/fullStar.png" alt="full star" />;
    } else if (i % rating === 0.5) {
      return <img src="./assets/halfStar.png" alt="half star" />;
    } else {
      return <img src="./assets/emptyStar.png" alt="empty star" />;
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
