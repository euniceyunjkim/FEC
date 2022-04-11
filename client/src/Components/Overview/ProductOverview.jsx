import React, { useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext.js';

function ProductOverview() {
  const { currentProd } = useContext(currentProducts);
  return (
    <div id="description">
      <i><h3>{currentProd.slogan && currentProd.slogan}</h3></i>
      <div>{currentProd.description}</div>
    </div>
  );
}

export default ProductOverview;
