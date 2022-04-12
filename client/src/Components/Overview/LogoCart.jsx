import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import CartModal from './CartModal';
import {
  Container, Logo, SearchCartContainer, Cart, Count,
  LDSContainer, LightDark, SearchContainer, Bar, Search,
} from './StyledComps/LogoCartStyle';

function LogoCart({ cart, getCart }) {
  const [show, setShow] = useState(false);
  const [barOpen, setBarOpen] = useState(false);
  const [light, setLight] = useState(true);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  const toggleShowCB = useCallback(() => toggleShow(), []);

  const styles = {
    open: 'width: 250px; cursor: text;',
    closed: 'width: 5px; cursor: auto;',
  };

  const mode = {
    jojo: 'overview_imgs/jojo.webp',
    dio: 'overview_imgs/dio.webp',
  };

  useEffect(() => {
    getCart();
  }, []);

  function home(e) {
    e.preventDefault();
    window.location.href = 'http://localhost:3000/';
  }

  return (
    <Container>
      <Logo
        src="overview_imgs/DarkLogo.webp"
        onClick={(e) => home(e)}
      />
      <SearchCartContainer>
        <LDSContainer>
          <LightDark onClick={() => setLight(!light)} src={light ? mode.jojo : mode.dio} />
          <SearchContainer>
            <Bar styles={barOpen ? styles.open : styles.closed} />
            <Search type="button" onClick={() => setBarOpen(!barOpen)}>
              <img alt="" src="overview_imgs/Search.webp" height="20px" width="20px" />
            </Search>
          </SearchContainer>
        </LDSContainer>
        <Cart
          src="overview_imgs/DarkCart.webp"
          onClick={() => toggleShow()}
        >
          <Count>
            {cart && cart.length}
          </Count>
          <CartModal
            cart={cart}
            show={show}
            hideModal={toggleShowCB}
          />
        </Cart>
      </SearchCartContainer>
    </Container>
  );
}

LogoCart.propTypes = {
  cart: PropTypes.arrayOf.isRequired,
  getCart: PropTypes.func.isRequired,
};

export default LogoCart;
