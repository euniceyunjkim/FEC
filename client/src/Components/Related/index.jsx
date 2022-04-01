import React, {useState, useEffect, useContext} from 'react';
import currentProducts from '../../Contexts/CurProdContext.js';
import RelatedList from './RelatedList.jsx';
const AxiosHelper = require('./AxiosHelper');

const Related = ({}) => {

  const {currentProd} = useContext(currentProducts);
  let [related, setRelated] = useState([]);
  useEffect(() => {
    if (currentProd.id) {
      AxiosHelper.getRelated(currentProd.id)
      .then((data) => setRelated(data.data))
      .catch((err) => console.error(err));
    }
  }, [currentProd])
  return (
    <RelatedList related={related} />
  )
}

export default Related;
