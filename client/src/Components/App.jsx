import React, { useState, useEffect, useContext } from 'react';
import Overview from './Overview/index.jsx';
import QA from './QA/index.jsx';
import Related from './Related/index.jsx';
import Reviews from './Reviews/index.jsx';
import currentProducts from '../Contexts/CurProdContext.js';
import currentStyle from '../Contexts/CurStyleContext.js';
import { useParams } from 'react-router-dom';



const axios = require('axios');

function App({}) {

  const [currentProd, setCurrentProd] = useState({});
  const [styles, setStyles] = useState([]);
  const [curStyle, setCurStyle] = useState({});
  let { prodID } = useParams();

  function defaultGrabber(items) {
    for (let i = 0; i < items.length; i += 1) {
      if (items[i]['default?'] === true) {
        setCurStyle(items[i]);
        return;
      }
    }
  }
  // const [loaded, setLoad] = useState(false);
  useEffect(() => {
    axios.get(`/products/${prodID}`)
      .then((data) => {
        setCurrentProd(data.data);
        axios.get(`products/:product_id/styles`, { params: { product_id: data.data.id } })
          .then((res) => {
            setStyles(res.data.results);
            defaultGrabber(res.data.results);
          })
          .catch((err) => console.log('err fetching styles', err));
      })
      .catch((err) => console.error(err));
  }, [prodID]);

  useEffect(() => {
    if (currentProd.id) {
      axios.get(`products/:product_id/styles`, { params: { product_id: currentProd.id } })
        .then((res) => {
          setStyles(res.data.results);
          defaultGrabber(res.data.results);
        })
        .catch((err) => console.log('err fetching styles', err));
    }
  }, [currentProd]);


  return (
    <currentProducts.Provider value={{ currentProd, setCurrentProd }}>
      <currentStyle.Provider value={{ curStyle, setCurStyle }}>
        <Overview styles={styles} setCurStyle={setCurStyle} />
        <Related />
      </currentStyle.Provider>
      <QA />
      <Reviews />
    </currentProducts.Provider>
  );
}

export default App;
