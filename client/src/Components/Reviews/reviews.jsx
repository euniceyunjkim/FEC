import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Box from './css/container';
import Star from './stars';

const axios = require('axios');

const Reviews = function Reviews({ obj }) {
  const [helpful, setHelpful] = useState(false);
  const [report, setReport] = useState(false);
  // tells api the review was helpful
  const wasHelpful = function wasHelpful() {
    axios.put(`/reviews/${obj.review_id}/helpful`)
      .then(() => setHelpful(true))
      .catch((err) => new Error(err));
  };
  // tells api the review was reported
  const wasReported = function wasReported() {
    axios.put(`/reviews/${obj.review_id}/report`)
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
            ,&nbsp;
            {moment(obj.date).format('MMMM Do YYYY')}
          </div>
        </Box.ReviewHeader>
        <h4>{obj.summary}</h4>
        <p>{obj.body}</p>
        <Box.Container>
          <br />

          <Box.Helpful>Helpful?</Box.Helpful>
          {helpful
            ? (
              <Box.Clicked>
                Yes (
                {obj.helpfulness + 1}
                )
              </Box.Clicked>
            )
            : (
              <Box.NotClicked>
                <u role="button" tabIndex={0} onClick={() => wasHelpful()} onKeyDown={() => wasHelpful()} aria-label="add helpful">
                  Yes
                </u>
                <span>
                  &nbsp;
                  {obj.helpfulness}
                </span>
              </Box.NotClicked>
            )}
          <Box.NotClicked>   |   </Box.NotClicked>
          <Box.NotClicked>
            <u role="button" tabIndex={0} onClick={() => wasReported()} onKeyDown={() => wasReported()}>Report</u>
          </Box.NotClicked>
        </Box.Container>
      </Box.Review>
    );
  }
  // if review exists and was reported
  if (obj && report) {
    return (
      <Box.Review>
        <h2>Thank you for reporting</h2>
      </Box.Review>
    );
  }
  // when no reviews have been passed in
  return <p>Loading...</p>;
};
Reviews.propTypes = {
  obj: PropTypes.instanceOf(Object).isRequired,
};
export default Reviews;
