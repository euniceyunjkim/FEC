import React, { useState, useEffect } from 'react';
import CartModal from './CartModal.jsx';
import {
  Container, Logo, SearchCartContainer, Cart, Count,
  LDSContainer, LightDark, SearchContainer, Bar, Search,
} from './StyledComps/LogoCartStyle.js';

function LogoCart({ cart, getCart }) {
  const [show, setShow] = useState(false);
  const [barOpen, setBarOpen] = useState(false);
  const [light, setLight] = useState(true);

  function toggleShow() {
    setShow(!show);
  }

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
      <Logo src="overview_imgs/DarkLogo.webp"
        onClick={(e) => home(e)}
      />
      <SearchCartContainer>
        <LDSContainer>
        <LightDark onClick={() => setLight(!light)} src={light ? mode.jojo : mode.dio}/>
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
            {cart.length}
          </Count>
          <CartModal
            cart={cart}
            show={show}
            hideModal={toggleShow}
          />
        </Cart>
      </SearchCartContainer>
    </Container>
  );
}

export default LogoCart;
