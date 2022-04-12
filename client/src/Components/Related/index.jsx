import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext.js';
import RelatedList from './RelatedList.jsx';
import OutfitList from './OutfitList.jsx';
import { RelatedRectangle, RelatedContainer } from './StyledComps/RelatedStyle.js';
const AxiosHelper = require('./AxiosHelper');

const Related = ({ }) => {

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
    <RelatedContainer>
      <RelatedRectangle>
        <h2>Customers Also Liked:</h2>
        <RelatedList related={related} />
        <h2>Your Outfit</h2>
        <OutfitList />
      </RelatedRectangle>
    </RelatedContainer>
  )
}

export default Related;
