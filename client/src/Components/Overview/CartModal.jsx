import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
right: 0;
outline: 0;
overflow-x: hidden;
overflow-y: auto;
position: fixed;
width: 100%;
z-index: 1000;
top: 105px;
`;

const Space = styled.div`
order: 1;
`;

const Modall = styled.div`
order: 2;
animation: fadeIn 0.2s ease-in-out;
align-items: center;
background: rgb(75, 21, 163, 0.2);
border-radius: 0.25rem;
display: flex;
flex-direction: column;
margin: 15px;
max-width: 500px;
position: relative;
z-index: 100;
`;

const ConfirmButton = styled.button`
  color: white;
  background-color: #4b15a3;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
`;

const Cart = styled.div`
width: 100%;
`;

const Item = styled.div`
display: flex;
width: 100%;
height: auto;
`;

const Pic = styled.div`
order: 1;
top: 2px;
left: 3px;
position: relative;
padding: 3px 2px;
width: 10px;
height: 10px;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
background-size: contain;
background-position: center;
`;

const Name = styled.div`
order: 2;
padding: 3px 5px;
`;

const Count = styled.div`
padding: 3px 5px;
order: 3;
`;

const Delete = styled.button`
order: 4;
padding: 3px 5px;
background-color: transparent;
border: none;
&:hover {
  cursor: pointer;
  color: white;
  background-color: #4b15a3;
}
`;

function CartModal({ show, hideModal, cart }) {

  return show
    ? createPortal(
      <div>
        <Wrapper>
          <Space />
          <Modall>
            <Cart>
              {cart.map((item) => (
                <Item key={item.sku_id}>
                  <Pic src="assets/fullStar.png" />
                  <Name>{item.sku_id}</Name>
                  <Count>QTY {item.count}</Count>
                  <Delete>X</Delete>
                </Item>
              ))}
            </Cart>
            <ConfirmButton onClick={hideModal}>
              Checkout
            </ConfirmButton>
          </Modall>
        </Wrapper>
      </div>,
      document.body,
    )
    : null;
}

export default CartModal;
