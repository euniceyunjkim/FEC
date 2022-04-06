import React from 'react';
import Box from './css/container';
import Star from './stars.jsx';

const Reviews = function ({ obj }) {
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
