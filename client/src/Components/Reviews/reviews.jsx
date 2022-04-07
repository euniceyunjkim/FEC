import React from 'react';
import Box from './css/container';
import Star from './stars.jsx';

const axios = require('axios');

const Reviews = function ({ obj }) {
  const wasHelpful = function () {
    console.log(obj);
    axios.get(`http://localhost:3000/reviews/:review_id/helpful?review_id=${obj.review_id}`)
      .then((res) => console.log(res))
      .catch(() => console.log('error in axios (reviews.jsx)'));
  }
  if (obj) {
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
          <u onClick={() => alert('put request not implented yet')}>
            yes ({obj.helpfulness})
          </u>
          <div>   |   </div>
          <u onClick={() => alert('put request not implented yet')}>report</u>
        </Box.Container>
      </Box.Review>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default Reviews;
