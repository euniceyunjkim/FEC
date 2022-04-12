import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Overview from './Overview/index';
import QA from './QA/index';
import Related from './Related/index';
import Reviews from './Reviews/index';
import currentProducts from '../Contexts/CurProdContext';
import currentStyle from '../Contexts/CurStyleContext';

const axios = require('axios');

function App() {
  const [currentProd, setCurrentProd] = useState({});
  const [styles, setStyles] = useState([]);
  const [curStyle, setCurStyle] = useState({});
  const { prodID } = useParams();

  function defaultGrabber(items) {
    setCurStyle(items[0]);
  }

  useEffect(() => {
    axios.get(`/products/${prodID}`)
      .then((data) => {
        setCurrentProd(data.data);
        axios.get('products/:product_id/styles', { params: { product_id: data.data.id } })
          .then((res) => {
            setStyles(res.data.results);
            defaultGrabber(res.data.results);
          })
          .catch((err) => new Error('err fetching styles', err));
      })
      .catch((err) => new Error(err));
  }, [prodID]);

  useEffect(() => {
    if (currentProd.id) {
      axios.get('products/:product_id/styles', { params: { product_id: currentProd.id } })
        .then((res) => {
          setStyles(res.data.results);
          defaultGrabber(res.data.results);
        })
        .catch((err) => new Error('err fetching styles', err));
    }
  }, [currentProd]);

  return (
    <currentProducts.Provider value={{ currentProd, setCurrentProd }}>
      <currentStyle.Provider value={{ curStyle, setCurStyle }}>
        <Overview styles={styles} setCurStyle={setCurStyle} />
        <Related />
      </currentStyle.Provider>
      <QA />
      <div id="ReviewsRef" />
      <Reviews />
    </currentProducts.Provider>
  );
}

export default App;
