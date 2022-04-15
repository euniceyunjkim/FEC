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
    axios.get(`/reviews?product_id=${currentProd.id}&sort=${sort}&count=${count}`)
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
  }, [sort, count]);
  useEffect(() => {
    if (currentProd.id) {
      getReviews();
      setCount(2);
    }
  }, [currentProd]);
  return (
    <Box.InnerCol>
      <Box.ReviewSort>
        <form onSubmit={(e) => setSort(e.target.value)}>
          {ratingCount}
          &nbsp;
          Reviews&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Sort by:&nbsp;
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
        <Box.MainButtons type="button" onClick={() => setCount(count + 2)}>More Reviews</Box.MainButtons>
        <Box.MainButtons type="button" onClick={() => setRenderModal(true)}>Add Reviews +</Box.MainButtons>
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
