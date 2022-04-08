import React, { useState, useEffect } from 'react';
import axios from 'axios';
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

export const Cart = styled.div`
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

function LogoCart({ cart, setCart, getCart }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }


  useEffect(() => {
    getCart();
  }, []);

  function home(e){
    e.preventDefault();
    window.location.href= 'http://localhost:3000/';
  }

  return (
    <Container>
      <Logo src="overview_imgs/DarkLogo.png"
      onClick={(e) => home(e)}/>
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
    </Container>
  );
}

export default LogoCart;
