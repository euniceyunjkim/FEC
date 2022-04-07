import React, { useState } from 'react';
import Box from './css/container';
import Star from './stars.jsx';

const axios = require('axios');

const Reviews = function ({ obj }) {
  const [helpful, setHelpful] = useState(false);
  const [report, setReport] = useState(false);
  const wasHelpful = function () {
    axios.get(`http://localhost:3000/reviews/${obj.review_id}/helpful`)
      .then(() => setHelpful(true))
      .catch((err) => console.log(err));
  };
  const wasReported = function () {
    axios.get(`http://localhost:3000/reviews/${obj.review_id}/report`)
      .then(() => setReport(true))
      .catch((err) => console.log(err));
  };
  if (obj && !report) {
    return (
      <Box.Review>
        <Box.ReviewHeader>
          <Star rating={obj.rating || 0} />
          <div style={{ fontSize: '70%' }}>{obj.reviewer_name} {obj.date}</div>
        </Box.ReviewHeader>
        <h4>{obj.summary}</h4>
        <p>{obj.body}</p>
        <Box.Container>
          <div>helpful?</div>
          {helpful ?
            <b>yes ({obj.helpfulness + 1})</b> :
            <u onClick={() => wasHelpful()}> yes ({obj.helpfulness}) </u>
            }
          <div>   |   </div>
          <u onClick={() => wasReported()}>report</u>
        </Box.Container>
      </Box.Review>
    );
  } else if (obj && report) {
    return (
      <Box.ReviewHeader>
        <h2>Thank you for reporting</h2>
      </Box.ReviewHeader>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Reviews;
