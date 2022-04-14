import React from 'react';
import PropTypes from 'prop-types';
import Box from './css/container';

// creates spread of how reviewer rated.
const RatingSpread = function RatingSpread({ ratingCount, stars }) {
  return (
    <p>
      5 stars &nbsp;&nbsp;
      <Box.Progress max={ratingCount} value={stars[5] || 0} />
      &nbsp;
      {Math.round((stars[5] / ratingCount || 0) * 100)}
      %
      <br />
      4 stars &nbsp;&nbsp;
      <Box.Progress max={ratingCount} value={stars[4] || 0} />
      &nbsp;
      {Math.round((stars[4] / ratingCount || 0) * 100)}
      %
      <br />
      3 stars &nbsp;&nbsp;
      <Box.Progress max={ratingCount} value={stars[3] || 0} />
      &nbsp;
      {Math.round((stars[3] / ratingCount || 0) * 100)}
      %
      <br />
      2 stars &nbsp;&nbsp;
      <Box.Progress max={ratingCount} value={stars[2] || 0} />
      &nbsp;
      {Math.round((stars[2] / ratingCount || 0) * 100)}
      %
      <br />
      1 stars &nbsp;&nbsp;
      <Box.Progress max={ratingCount} value={stars[1] || 0} />
      &nbsp;
      {Math.round((stars[1] / ratingCount || 0) * 100)}
      %
    </p>
  );
};
RatingSpread.propTypes = {
  ratingCount: PropTypes.number.isRequired,
  stars: PropTypes.objectOf.isRequired,
};
export default RatingSpread;
