import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import Box from './css/container';
import Review from './reviews.jsx';

const axios = require('axios');

const RenderRight = function () {
  const [sort, setSort] = useState('relevant');
  const [reviews, setReviews] = useState([]);
  const [count, setCount] = useState(2);
  const { currentProd } = useContext(currentProducts);
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
          Sort reviews by:
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
        <button onClick={() => alert('shtoop it its not ready yet')}>add reviews +</button>
      </div>

    </Box.InnerCol>
  );
};
export default RenderRight;
