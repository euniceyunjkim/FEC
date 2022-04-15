import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import CartModal from './CartModal';
import {
  Container, Logo, SearchCartContainer, Cart, Count,
  LDSContainer, LightDark, SearchContainer, Bar, Search,
} from './StyledComps/LogoCartStyle';

function LogoCart({
  cart, getCart, setLightMode, lightMode,
}) {
  const [show, setShow] = useState(false);
  const [barOpen, setBarOpen] = useState(false);

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
    window.location.href = '/';
  }

  function toggle() {
    setLightMode();
  }
  return (
    <Container>
      <Logo
        src={lightMode ? 'overview_imgs/DarkLogo.webp' : 'overview_imgs/LightLogo.webp'}
        onClick={(e) => home(e)}
      />
      <SearchCartContainer>
        <LDSContainer>
          <LightDark onClick={() => toggle()} src={lightMode ? mode.jojo : mode.dio} />
          <SearchContainer>
            <label htmlFor="bar">
              <Bar id="bar" name="bar" type="text" styles={barOpen ? styles.open : styles.closed} />
            </label>
            <Search name="searchbar" type="button" onClick={() => setBarOpen(!barOpen)}>
              <img alt="searchbarimg" src="overview_imgs/Search.webp" height="20px" width="20px" />
            </Search>
          </SearchContainer>
        </LDSContainer>
        <Cart
          src={lightMode ? 'overview_imgs/DarkCart.webp' : 'overview_imgs/LightCart.webp'}
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
  cart: PropTypes.instanceOf(Array).isRequired,
  getCart: PropTypes.func.isRequired,
  setLightMode: PropTypes.func.isRequired,
  lightMode: PropTypes.bool.isRequired,
};

export default LogoCart;
