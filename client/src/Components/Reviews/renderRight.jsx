import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';
import Review from './reviews.jsx';

const axios = require('axios');

const RenderRight = function () {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState([]);
  const { currentProd } = useContext(currentProducts);
  const getReviews = function (sortMethod) {
    axios.get(`http://localhost:3000/reviews?product_id=${currentProd.id}&sort=${sortMethod}&count=2`)
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch(() => console.log('error in axios'));
  };
  useEffect(() => {
    if (currentProd.id) {
      getReviews(currentProd.id);
    }
  }, [currentProd]);
  const newSort = function (e) {
    setSort(e.target.value);
    getReviews(e.target.value);
  };

  return (
    <Box.InnerCol>
      <form onSubmit={(e) => newSort(e)}>
        <label>
          Sort reviews by:
          <select value={sort} onChange={(e) => newSort(e)}>
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
        <button onClick={() => alert('shtoop it its not ready yet')}>more reviews</button>
        <button onClick={() => alert('shtoop it its not ready yet')}>add reviews +</button>
      </div>

    </Box.InnerCol>
  );
};
export default RenderRight;
