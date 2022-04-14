import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from './css/container';
import Star from './stars';

const axios = require('axios');

const Reviews = function Reviews({ obj }) {
  const [helpful, setHelpful] = useState(false);
  const [report, setReport] = useState(false);
  // tells api the review was helpful
  const wasHelpful = function wasHelpful() {
    axios.put(`http://localhost:3000/reviews/${obj.review_id}/helpful`)
      .then(() => setHelpful(true))
      .catch((err) => new Error(err));
  };
  // tells api the review was reported
  const wasReported = function wasReported() {
    axios.put(`http://localhost:3000/reviews/${obj.review_id}/report`)
      .then(() => setReport(true))
      .catch((err) => new Error(err));
  };
  // if review exists and was not reported
  if (obj && !report) {
    return (
      <Box.Review>
        <Box.ReviewHeader>
          <Star rating={obj.rating || 0} />
          <div style={{ fontSize: '70%' }}>
            {obj.reviewer_name}
            {obj.date}
          </div>
        </Box.ReviewHeader>
        <h4>{obj.summary}</h4>
        <p>{obj.body}</p>
        <Box.Container>
          <br />
          <div>helpful?</div>
          {helpful
            ? (
              <b>
                yes(
                {obj.helpfulness + 1}
                )
              </b>
            )
            : (
              <u role="button" tabIndex={0} onClick={() => wasHelpful()} onKeyDown={() => wasHelpful()}>
                yes(
                {obj.helpfulness}
                )
              </u>
            )}
          <div>   |   </div>
          <u role="button" tabIndex={0} onClick={() => wasReported()} onKeyDown={() => wasReported()}>report</u>
        </Box.Container>
      </Box.Review>
    );
  }
  // if review exists and was reported
  if (obj && report) {
    return (
      <Box.ReviewHeader>
        <h2>Thank you for reporting</h2>
      </Box.ReviewHeader>
    );
  }
  // when no reviews have been passed in
  return <p>Loading...</p>;
};
Reviews.propTypes = {
  obj: PropTypes.objectOf.isRequired,
};
export default Reviews;
