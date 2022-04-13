import React from 'react';
import Box from './css/container';

const RatingSpread = function ({ ratingCount, stars, max }) {
  return (
    <p>
      <u>5 stars </u>
      <Box.Progress max={ratingCount} value={stars[5] || 0} />
      {Math.round((stars[5] / ratingCount || 0) * 100)}
      %
      <br />
      <u>4 stars </u>
      <Box.Progress max={ratingCount} value={stars[4] || 0} />
      {Math.round((stars[4] / ratingCount || 0) * 100)}
      %
      <br />
      <u>3 stars </u>
      <Box.Progress max={ratingCount} value={stars[3] || 0} />
      {Math.round((stars[3] / ratingCount || 0) * 100)}
      %
      <br />
      <u>2 stars </u>
      <Box.Progress max={ratingCount} value={stars[2] || 0} />
      {Math.round((stars[2] / ratingCount || 0) * 100)}
      %
      <br />
      <u>1 stars </u>
      <Box.Progress max={ratingCount} value={stars[1] || 0} />
      {Math.round((stars[1] / ratingCount || 0) * 100)}
      %
    </p>
  );
};

export default RatingSpread;
