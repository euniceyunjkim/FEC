import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: space-between;
`;

const Logo = styled.div`
background-size: contain;
width: 90px;
height: 90px;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
text-align: center;
`;

const Cart = styled.div`

`;

function LogoCart() {
  return (
    <Container>
      <Logo src="https://i.ibb.co/sshCn2y/IMG-0640.png" />
      {/* <Cart src=""> */}
    </Container>
  );
}

export default LogoCart;
