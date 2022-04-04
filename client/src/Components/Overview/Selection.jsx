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
  const [skus, setSkus] = useState([]);
  const { curStyle } = useContext(currentStyle);
  const [quant, setQuant] = useState(0);

  useEffect(() => {
    if (curStyle.style_id) {
      setSkus(Object.keys(curStyle.skus));
    }
  }, [curStyle]);

  useEffect(() => {
    if (skus) {
      setQuant(curStyle.skus[skus[0]].quantity);
    }
  }, [skus]);

  function sizeSelect(e) {
    setQuant(curStyle.skus[e.target.value].quantity);
  }

  return (
    <div>
      <form>
        {console.log(curStyle)}
        <DropdownContainer>
          <div id="size">
            <select onChange={(e) => sizeSelect(e)}>
              {curStyle.skus.map((sku) =>
                <option key={sku} value={sku}>{curStyle.skus[sku].size}</option>)}
            </select>
          </div>
          <div id="quantity">
            <select>
              {console.log(quant)}
              <option value="quant">{quant}</option>
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
