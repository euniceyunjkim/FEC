import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';
import Review from './reviews';
import WriteReview from './writeReview';

const axios = require('axios');

// renders right side of widget
const RenderRight = function RenderRight({ ratingCount, characteristics }) {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const { currentProd } = useContext(currentProducts);
  const [renderModal, setRenderModal] = useState(false);
  // gets revies from api
  const getReviews = function getReviews() {
    axios.get(`http://localhost:3000/reviews?product_id=${currentProd.id}&sort=${sort}&count=${count}`)
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch(() => new Error('error in axios (renderRight.jsx)'));
  };
  // on change in any of product sort or reviews shown this function will run
  useEffect(() => {
    if (currentProd.id) {
      getReviews();
    }
  }, [currentProd, sort, count]);
  return (
    <Box.InnerCol>
      <Box.ReviewSort>
        <form onSubmit={(e) => setSort(e.target.value)}>
          {ratingCount}
          &nbsp;
          reviews. Sort by:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </form>
      </Box.ReviewSort>
      <div>
        {reviews.map((e) => (
          <Review obj={e} key={e.review_id} />
        ))}
      </div>

      <div>
        <button type="button" onClick={() => setCount(count + 2)}>more reviews</button>
        <button type="button" onClick={() => setRenderModal(true)}>add reviews +</button>
        {renderModal === true
          ? (
            <WriteReview
              setRenderModal={setRenderModal}
              setRender={setRenderModal}
              characteristics={characteristics}
            />
          )
          : <div />}
      </div>

    </Box.InnerCol>
  );
};
RenderRight.propTypes = {
  ratingCount: PropTypes.number.isRequired,
  characteristics: PropTypes.instanceOf(Object).isRequired,
};
export default RenderRight;
