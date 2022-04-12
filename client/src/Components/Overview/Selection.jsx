import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Modal from './Modal';
import currentStyle from '../../Contexts/CurStyleContext';
import {
  SelectionContainer, SizeContainer, SizeButton, QuantDrop,
  DropdownContainer, AddButton, MinusBut, Count, PlusBut, NoBut,
} from './StyledComps/SelectionStyle';

function Selection({ getCart }) {
  const [skus, setSkus] = useState({});
  const { curStyle } = useContext(currentStyle);
  const [selSize, setSelSize] = useState(null);
  const [selQuant, setSelQuant] = useState(1);
  const skuKeys = Object.keys(skus);
  const [clicked, setClicked] = useState(-1);
  const [quant, setQuant] = useState('--');

  const [shown, setToggle] = useState(false);

  const styles = {
    button: 'color: black; background-color: white',
    clicked: 'color: white; background-color: #4b15a3',
  };

  useEffect(() => {
    if (curStyle.style_id) {
      setSkus(curStyle.skus);
    }
  }, [curStyle]);

  function toggleModal() {
    setToggle((prev) => !prev);
  }

  const toggleModalCB = useCallback(() => toggleModal(), []);

  function sizeSelect(e, index) {
    setQuant(skus[e.target.value].quantity);
    setSelSize(e.target.value);
    setSelQuant(1);
    setClicked(index);
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
        .then(() => getCart())
        .catch((err) => new Error(err));
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
              {skuKeys && skuKeys.map((sku, index) => (
                <SizeButton
                  type="button"
                  onClick={(e) => sizeSelect(e, index)}
                  key={sku}
                  value={sku}
                  styles={clicked === index ? styles.clicked : styles.button}
                >
                  {skus[sku].size}
                </SizeButton>
              ))}
            </SizeContainer>
          </div>
          <QuantDrop>
            <MinusBut onClick={() => updateQuant(-1)}>
              -
            </MinusBut>
            <Count>
              {quant && quant > 0 ? selQuant : '--'}
            </Count>
            <PlusBut onClick={() => updateQuant(1)}>
              +
            </PlusBut>
          </QuantDrop>
          {quant > 0 || !selSize ? (
            <div id="quantity">
              <AddButton
                type="button"
                value="Add to bag"
                onClick={() => addToBag(selSize, selQuant)}
              >
                Add to bag
              </AddButton>
              <Modal
                shown={shown}
                hideModal={toggleModalCB}
              />
            </div>
          ) : (
            <NoBut type="button">
              Out of Stock
            </NoBut>
          )}
        </DropdownContainer>
      </SelectionContainer>
    </div>
  );
}

Selection.propTypes = {
  getCart: PropTypes.func.isRequired,
};
export default Selection;
