import React, { useState, useEffect, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';
import RelatedList from './RelatedList';
import OutfitList from './OutfitList';
import { RelatedRectangle, RelatedContainer } from './StyledComps/RelatedStyle';

const AxiosHelper = require('./AxiosHelper');

function Related() {
  const { currentProd } = useContext(currentProducts);

  const [related, setRelated] = useState([]);
  useEffect(() => {
    if (currentProd.id) {
      AxiosHelper.getRelated(currentProd.id)
        .then((data) => setRelated(data.data))
        .catch((err) => new Error(err));
    }
  }, [currentProd]);

  return (
    <RelatedContainer>
      <RelatedRectangle>
        <h2>CUSTOMERS ALSO LIKED</h2>
        <RelatedList related={related} />
        <br />
        <h2>YOUR OUTFIT</h2>
        <OutfitList />
      </RelatedRectangle>
    </RelatedContainer>
  );
}

export default Related;
