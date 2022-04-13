import React, { useState, useEffect, useContext } from 'react';
// import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';

// import fullStar from './assets/fullStar.webp';
// import halfStar from './assets/halfStar.webp';
// import emptyStar from './assets/emptyStar.webp';

const PickStar = function ({ rating, setRating }) {
  return (
    <div>
      {rating > 0
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(1)} />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(1)} />}
      {rating > 1
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(2)} />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(2)} />}
      {rating > 2
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(3)} />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(3)} />}
      {rating > 3
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(4)} />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(4)} />}
      {rating === 5
        ? <Box.StarRating src="./assets/fullStar.webp" alt="full star" onClick={() => setRating(5)} />
        : <Box.StarRating src="./assets/emptyStar.webp" alt="empty star" onClick={() => setRating(5)} />}
    </div>
  );
};

export default PickStar;
