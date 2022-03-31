import React, {useState, useEffect, useContext} from 'react';
import Overview from './Overview/index.jsx';
import QA from './QA/index.jsx';
import Related from './Related/index.jsx';
import Reviews from './Reviews/index.jsx';

const App = ({}) => {


  return (
  <div>
    <Overview />
    <Related />
    <Reviews />
    <QA />
  </div>
  )
};

export default App;
