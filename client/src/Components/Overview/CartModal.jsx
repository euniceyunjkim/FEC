import React from 'react';
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
top: 15%;
width: 100%;
z-index: 1000;
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
`;

const Pic = styled.div`
order: 1;
padding: 3px 5px;
`;

const Name = styled.div`
order: 2;
padding: 3px 5px;
`;

const Count = styled.div`
padding: 3px 5px;
order: 3;
`;

function CartModal({ show, hideModal, cart, styles }) {
  return show
    ? createPortal(
      <div>
        <Wrapper>
          <Space />
          <Modall>
            <Cart>
              {cart.map((item) => (
                <Item>
                  <Pic>Picture</Pic>
                  <Name>{item.sku_id}</Name>
                  <Count>QTY {item.count}</Count>
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
