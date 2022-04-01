import React, { useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext.js';

function ProductOverview() {
  const { currentProd } = useContext(currentProducts);
  return (
    <div id="description">
      <h3>{currentProd.slogan}</h3>
      <div>{currentProd.description}</div>
    </div>
  );
}

export default ProductOverview;
