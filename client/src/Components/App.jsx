import React, {useState, useEffect, useContext} from 'react';
import Overview from './Overview/index.jsx';
import QA from './QA/index.jsx';
import Related from './Related/index.jsx';
import Reviews from './Reviews/index.jsx';
import currentProducts from '../Contexts/CurProdContext.js';
const axios = require('axios');

const App = ({}) => {

  let [currentProd, setCurrentProd] = useState({});

  useEffect(() => {
    axios.get('/products')
    .then((data) => setCurrentProd(data.data[0]))
    .catch((err) => console.error(err))
  }, [])

  return (
  <currentProducts.Provider value={{currentProd, setCurrentProd}}>
    <Overview />
    {/*<Related />*/}
    <QA />
    <Reviews />
  </currentProducts.Provider>
  )
};

export default App;
