import React, {useContext} from 'react';
import currentProducts from '../../Contexts/CurProdContext.js';

const Related = ({}) => {

  const {currentProd} = useContext(currentProducts);

  return (
    <div>Related</div>
  )
}

export default Related;
