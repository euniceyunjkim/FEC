import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import CartModal from './CartModal.jsx';

const Container = styled.div`
display: flex;
justify-content: space-between;
`;

export const Logo = styled.div`
background-size: contain;
width: 90px;
height: 90px;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
text-align: center;
&:hover {
  cursor: pointer;
}
`;

const SearchCartContainer = styled.div`
display: flex;
`;

export const Cart = styled.div`
order: 2;
background-size: contain;
width: 90px;
height: 90px;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
text-align: center;
position: relative;
&:hover {
  cursor: pointer;
}
`;

const Count = styled.div`
font-weight: bold;
color: #4b15a3;
position: absolute;
width: 100%;
height: 100%;
top: 50px;
left: 0;
text-align: center;
`;

const LDSContainer = styled.div`
top: -1px;
display: grid;
grid-template: 1fr/1fr;
place-items: right;
height: 55px;
`;

const LightDark = styled.div`
z-index: 1;
background-image: ${({ src }) => `url(${src})`};
width: 55px;
height: 55px;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
border-radius: 10rem;
`;

const SearchContainer = styled.div`
  z-indez: 2;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  background-color: white;
  color: #4b15a3;
  height: 25px;
  border-radius: 10rem;
`;

const Bar = styled.input`
  margin-left: 10px;
  width: 220px;
  line-height: 1;
  background-color: transparent;
  border: none;
  outline: none;
  color: #4b15a3;
  ${({ styles }) => `${styles}`};
`;

const Search = styled.button`
  margin-right: 5px;
  font-size: 14px;
  line-height: 1;
  background-color: transparent;
  align-items: right;
  border: none;
  color: #4b15a3;
  &::placeholder {
    color: #4b15a3;
  }
`;

function LogoCart({ cart, setCart, getCart }) {
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
    jojo: 'overview_imgs/jojo.png',
    dio: 'overview_imgs/dio.png',
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
      <Logo src="overview_imgs/DarkLogo.png"
        onClick={(e) => home(e)}
      />
      <SearchCartContainer>
        <LDSContainer>
        <LightDark onClick={() => setLight(!light)} src={light ? mode.jojo : mode.dio}/>
        <SearchContainer>
          <Bar styles={barOpen ? styles.open : styles.closed} />
          <Search type="button" onClick={() => setBarOpen(!barOpen)}>
            <img alt="" src="overview_imgs/Search.png" height="20px" width="20px" />
          </Search>
        </SearchContainer>
        </LDSContainer>
        <Cart
          src="overview_imgs/DarkCart.png"
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
