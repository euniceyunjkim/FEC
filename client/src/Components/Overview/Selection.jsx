import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

const SelectionContainer = styled.div`
width: 500px;
`;
const DropdownContainer = styled.div`
display: flex;
`;

const SubmitContainer = styled.div`
display: flex;
`;

const SizeDrop = styled.select`

`;

const QuantDrop = styled.select`

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
    return Array.from({ length: num }, (_, i) => i + 1);
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
      <SelectionContainer>
      <form>
        <DropdownContainer>
          <div id="size">
            <SizeDrop onChange={(e) => sizeSelect(e)}>
              <option value="Select Size">Select Size</option>
              {skuKeys.map((sku) => <option key={sku} value={sku}>{skus[sku].size}</option>)}
            </SizeDrop>
          </div>
          <div id="quantity">
            <QuantDrop>
              {quant.map((num) => <option key={num} value="quant">{num}</option>)}
            </QuantDrop>
          </div>
        </DropdownContainer>
        <SubmitContainer>
          <input type="button" value="Add to bag" />
        </SubmitContainer>
      </form>
      </SelectionContainer>
    </div>
  );
}

export default Selection;