import React, { useState, useContext, useEffect } from 'react';
import currentStyle from '../../Contexts/CurStyleContext.js';

function Selection({ }) {
  const [skus, setSkus] = useState({});
  const { curStyle } = useContext(currentStyle);
  const [quant, setQuant] = useState(0);
  const [loaded, setLoad] = useState(false);

  const skuKeys = Object.keys(skus);

  useEffect(() => {
    if (curStyle.style_id) {
      setSkus(curStyle.skus);
      // setQuant(skus[skuKeys[0]].quantity);
    }
  }, [curStyle]);

  function sizeSelect(e) {
    setQuant(e.target.value);
  }

  return (
    <div>
      <form>
        <div id="size">
          <select onChange={(e) => sizeSelect(e)}>
            {skuKeys.map((sku) => <option key={sku} value={sku}>{skus[sku].size}</option>)}
          </select>
        </div>
        <div id="quantity">
          <select>
            <option value="quant">Quantity</option>
          </select>
        </div>
        <input type="button" value="Add to bag" />
      </form>
      <button type="button">Star</button>
    </div>
  );
}

export default Selection;
