import React, { useState, useContext, useEffect } from 'react';
import currentStyle from '../../Contexts/CurStyleContext.js';
import styled from 'styled-components';

const DropdownContainer = styled.div`
display: flex;
`;

const SubmitContainer = styled.div`
display: flex;
`;

function Selection({ }) {
  const [skus, setSkus] = useState({});
  const { curStyle } = useContext(currentStyle);
  const [quant, setQuant] = useState(['--']);
  const skuKeys = Object.keys(skus);

  useEffect(() => {
    if (curStyle.style_id) {
      setSkus(curStyle.skus);
    }
  }, [curStyle]);

  function quantityArr(num) {
    let result = [];
    let count = 1;
    while (count <= num) {
      result.push(count);
      count++;
    }
    return result;
  }

  function sizeSelect(e) {
    if (e.target.value === 'Select Size') {
      setQuant(['--']);
    } else {
      setQuant(quantityArr(skus[e.target.value].quantity));
    }
  }

  return (
    <div>
      <form>
        <DropdownContainer>
          <div id="size">
            <select onChange={(e) => sizeSelect(e)}>
              <option value="Select Size">Select Size</option>
              {skuKeys.map((sku) =>
                <option key={sku} value={sku}>{skus[sku].size}</option>)}
            </select>
          </div>
          <div id="quantity">
            <select>
              {quant.map((num) => <option key={num} value="quant">{num}</option>)}
            </select>
          </div>
        </DropdownContainer>
        <SubmitContainer>
          <input type="button" value="Add to bag" />
          <button type="button">Star</button>
        </SubmitContainer>
      </form>
    </div>
  );
}

export default Selection;
