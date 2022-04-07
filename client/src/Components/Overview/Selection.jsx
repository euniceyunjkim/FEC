import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal.jsx';

import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

const SelectionContainer = styled.div`
width: 100%;
display: flex;
`;

const DropdownContainer = styled.div`
float: left;
display: grid;
grid-template: 1fr/ 1fr;
place-items: center;
`;

const SizeContainer = styled.div`
z-index: 1;
`;

const SizeButton = styled.button`
border: 1px solid;
// color: ${styling => styling.color};
// background-color: ${styling => styling.background};
color: black;
background-color: white;
font-align: center;
font-size: 15px;
margin: 8px;
padding:10px 20px;

&:hover {
  cursor: pointer;
  color: white;
  background-color: #4b15a3;
};

&:active {
  color: white;
  background-color: #4b15a3;
}
&:focus {
  color: white;
  background-color: #4b15a3;
}

// ${({ selSize }) => selSize && `background-color: #4b15a3;
// color: white; `}
`;

const QuantDrop = styled.div`
z-index: 2;
place-items: center;
justify-content: space-around;
padding: 10px 0px;
`;

const AddButton = styled.button`
float: right;
color: black;
border: 1px solid;
background: white;
font-align: center;
font-size: 15px;
margin: 8px;
padding:10px 20px;

&:hover {
  cursor: pointer;
  background-color: #4b15a3;
  color: white;
};
`;

const MinusBut = styled.button`
color: black;
border: 1px solid;
background: white;
font-align: center;
font-size: 15px;
margin: 8px;
padding:10px 30px;
float: left;
&:hover {
  cursor: pointer;
  background-color: #4b15a3;
  color: white;
};
`;

const Count = styled.div`
color: black;
  border: 1px solid;
  background: white;
  font-align: center;
  font-size: 15px;
  margin: 8px;
  padding:10px 50px;
  float: left;
`;

const PlusBut = styled.button`
  color: black;
  border: 1px solid;
  background: white;
  font-align: center;
  font-size: 15px;
  margin: 8px;
  padding:10px 30px;
  float: right;

  &:hover {
    cursor: pointer;
    background-color: #4b15a3;
    color: white;
  };
`;

function Selection({ }) {
  const [skus, setSkus] = useState({});
  const { curStyle } = useContext(currentStyle);
  const [quant, setQuant] = useState(1);
  const [selSize, setSelSize] = useState(null);
  const [selQuant, setSelQuant] = useState(1);
  const skuKeys = Object.keys(skus);

  const [shown, setToggle] = useState(false);

  useEffect(() => {
    if (curStyle.style_id) {
      setSkus(curStyle.skus);
    }
  }, [curStyle]);

  function toggleModal() {
    setToggle(!shown);
  }

  function sizeSelect(e) {
    setQuant(skus[e.target.value].quantity);
    setSelSize(e.target.value);
    setSelQuant(1);
    // setClick({ ...clicked, [e.target.value]: { color: 'white', background: '#4b15a3' } });
  }

  function updateQuant(num) {
    if (selSize) {
      if (num > 0) {
        if (selQuant < quant) {
          setSelQuant(selQuant + num);
        } else if (selQuant === quant) {
          setSelQuant(quant);
        }
      } else if (num < 0) {
        if (selQuant > 1) {
          setSelQuant(selQuant + num);
        } else if (selQuant === 1) {
          setSelQuant(1);
        }
      }
    } else {
      toggleModal();
    }
  }

  function addToBag(size, quantity) {
    if (size && quantity) {
      const item = { sku_id: size, count: quantity };
      axios.post('/cart', item)
        .catch((err) => console.error(err));
    } else {
      toggleModal();
    }
  }

  return (
    <div>
      <SelectionContainer>
        <DropdownContainer>
          <div id="size">
            <SizeContainer>
              {skuKeys.map((sku) => (
                <SizeButton type="button"
                  onClick={(e) => sizeSelect(e)}
                  key={sku} value={sku}>
                  {skus[sku].size}
                </SizeButton>
              ))}
            </SizeContainer>
          </div>
          <div id="quantity">
            <QuantDrop>
              <MinusBut onClick={() => updateQuant(-1)}>
                -
              </MinusBut>
              <Count>
                {selQuant}
              </Count>
              <PlusBut onClick={() => updateQuant(1)}>
                +
              </PlusBut>
            </QuantDrop>
          </div>
        </DropdownContainer>
        <AddButton type="button" value="Add to bag"
          onClick={() => addToBag(selSize, selQuant)}>
          Add to bag
        </AddButton>
        <Modal shown={shown} hideModal={toggleModal} />
      </SelectionContainer>
    </div>
  );
}

export default Selection;
