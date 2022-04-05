import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';
import RenderRating from '../renderRating.jsx';
import RenderLeft from './renderLeft.jsx';

// const AxiosHelper = require('./AxiosHelper');

const Reviews = function Reviews() {
  const { currentProd } = useContext(currentProducts);

  return (
    <div>
      <Box.Container>
        <Box.InnerCol>
          Ratings And Reviews
          <Box.ReviewSum>
            <RenderLeft />
          </Box.ReviewSum>
        </Box.InnerCol>
        <Box.InnerCol>
          <h2>amount of reviews and how you want to sort</h2>
          <div>
            <h1>big boi box for reviews</h1>
            <p>Container for each review</p>
            <p>Container for each review</p>
          </div>

          <Box.InnerCol>
            <button onClick={() => alert('shtoop it its not ready yet')}>more reviews</button>
            <button onClick={() => alert('shtoop it its not ready yet')}>add reviews +</button>
          </Box.InnerCol>

        </Box.InnerCol>
      </Box.Container>
    </div>

  );
};

export default Reviews;
