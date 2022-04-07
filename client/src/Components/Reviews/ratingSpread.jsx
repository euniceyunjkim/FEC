import React from 'react';

const RatingSpread = function ({ stars, max }) {
  return (
    <p>
      <u>5 stars </u>
      <progress max={max} value={stars[5] || 0} />
      <br />
      <u>4 stars </u>
      <progress max={max} value={stars[4] || 0} />
      <br />
      <u>3 stars </u>
      <progress max={max} value={stars[3] || 0} />
      <br />
      <u>2 stars </u>
      <progress max={max} value={stars[2] || 0} />
      <br />
      <u>1 stars </u>
      <progress max={max} value={stars[1] || 0} />
    </p>
  );
};

export default RatingSpread;
