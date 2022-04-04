import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
// import fullStar from './assets/fullStar.png';
// import halfStar from './assets/halfStar.png';
// import emptyStar from './assets/emptyStar.png';

const Star = function bob({ rating }) {
  const renderStars = function () {
    for (let i = 0; i < 5; i += 1) {
      if (i < rating) {
        // pausing here
      }
    }
  };
  return (
    <div>
      <img src={'./assets/fullStar.png'} />
      {renderStars()}
    </div>
  );
};

export default Star;
