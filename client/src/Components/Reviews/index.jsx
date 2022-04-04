import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';
import RaitingSum from './ratingSum.jsx';

// const AxiosHelper = require('./AxiosHelper');

const Reviews = function Reviews() {
//   const {currentProd} = useContext(currentProducts);
//   let [related, setRelated] = useState([]);
//   useEffect(() => {
//     if (currentProd.id) {
//       AxiosHelper.getRelated(currentProd.id)
//       .then((data) => setRelated(data.data))
//       .catch((err) => console.error(err));
//     }
//   }, [currentProd]);
  // display: 'inline-flex';
  // flexDirection: 'row';

  return (
    <div>
      {console.log(currentProducts)}
      Reviews
      <Box.Container>
        <Box.InnerCol>
          <Box.ReviewSum>
            <RaitingSum loadRatings="1" />
          </Box.ReviewSum>
          <p>some other thing</p>
          <ul>
            <ol>5stars</ol>
            <ol>4stars</ol>
            <ol>3stars</ol>
            <ol>2stars</ol>
            <ol>1stars</ol>
          </ul>
          <h3>characteristics</h3>
        </Box.InnerCol>
        <Box.InnerCol>
          <h2>amount of reviews and how you want to sort</h2>
          <Box.InnerCol>
            <h1>big boi box for reviews</h1>
            <p>Container for each review</p>
            <p>Container for each review</p>
          </Box.InnerCol>

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
