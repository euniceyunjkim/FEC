import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';
import Review from './reviews.jsx';
import WriteReview from './writeReview.jsx';

const axios = require('axios');

const RenderRight = function ({ratingCount, characteristics}) {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const { currentProd } = useContext(currentProducts);
  const [renderModal, setRenderModal] = useState(false);
  const getReviews = function () {
    axios.get(`http://localhost:3000/reviews?product_id=${currentProd.id}&sort=${sort}&count=${count}`)
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch(() => console.log('error in axios'));
  };
  useEffect(() => {
    if (currentProd.id) {
      getReviews();
    }
  }, [currentProd, sort, count]);
  return (
    <Box.InnerCol>
      <form onSubmit={(e) => setSort(e.target.value)}>
        <label>
          {ratingCount} reviews. Sort by:
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="relevant">Relevant</option>
            <option value="helpful">Helpful</option>
            <option value="newest">Newest</option>
          </select>
        </label>
      </form>
      <div>
        {reviews.map((e) => (
          <Review obj={e} key={e.review_id} />
        ))}
      </div>

      <div>
        <button onClick={() => setCount(count + 2)}>more reviews</button>
        <button onClick={() => setRenderModal(true)}>add reviews +</button>
        {renderModal === true
          ? <WriteReview setRender={setRenderModal} characteristics={characteristics} />
          : <div />}
      </div>

    </Box.InnerCol>
  );
};
export default RenderRight;
