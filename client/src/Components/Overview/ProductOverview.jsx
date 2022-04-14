import React, { useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext';

function ProductOverview() {
  const { currentProd } = useContext(currentProducts);
  return (
    <div id="description">
      <i><h3>{currentProd.slogan && currentProd.slogan.toUpperCase()}</h3></i>
      <div>{currentProd.description && currentProd.description}</div>
    </div>
  );
}

export default ProductOverview;
