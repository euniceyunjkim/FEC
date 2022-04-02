/*
import React, {useState, useEffect, useContext} from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import RelatedList from './RelatedList';
import OutfitList from './OutfitList';
const AxiosHelper = require('./AxiosHelper');

const Related = ({}) => {

  const {currentProd} = useContext(currentProducts);
  let [related, setRelated] = useState([] );
  useEffect(() => {
    console.log(currentProd);
    if (currentProd.id) {
      AxiosHelper.getRelated(currentProd.id)
      .then((data) => setRelated(data.data))
      .catch((err) => console.error(err));
    }
  }, [currentProd])
  return (
    <>
    <RelatedList related={related} />
    <OutfitList />
    </>
  )
}

export default Related;
*/
