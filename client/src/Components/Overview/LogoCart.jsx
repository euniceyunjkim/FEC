import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

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
`;

export const Cart = styled.div`
background-size: contain;
width: 90px;
height: 90px;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
text-align: center;
`;

function LogoCart() {
  return (
    <Container>
      <Logo src="overview_imgs/DarkLogo.png" />
      <Cart src="overview_imgs/DarkCart.png" />
    </Container>
  );
}

export default LogoCart;
