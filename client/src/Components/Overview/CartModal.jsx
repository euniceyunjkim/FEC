import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Overlay = styled.div`
background-color: #999999;
height: 100vh;
left: 0;
opacity: 0.5;
position: fixed;
top: 0;
width: 100vw;
z-index: 500;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
left: 0;
outline: 0;
overflow-x: hidden;
overflow-y: auto;
position: fixed;
top: 25%;
width: 100%;
z-index: 1000;
`;

const Modall = styled.div`
align-items: center;
background: white;
border-radius: 0.25rem;
display: flex;
flex-direction: column;
margin: 1.875rem;
max-width: 500px;
position: relative;
z-index: 100;
`;

const Content = styled.div`
align-items: center;
display: flex;
flex-direction: column;
padding: 10px; 5px;
`;

const ConfirmButton = styled.button`
  color: white;
  background-color: #4b15a3;
  cursor: pointer;
  font-weight: bold;
  width: 100%;
`;

const Item = styled.div`
`;

function CartModal({ show, hideModal, cart, styles }) {
  return show
    ? createPortal(
      <div>
        <Overlay />
        <Wrapper>
          <Modall>
            <Content>
              {cart.map((item) => (
                <Item>
                  <div>Picture</div>
                  <div>Name</div>
                  <div>{item.count}</div>
                </Item>
              ))}
            </Content>
            <ConfirmButton onClick={hideModal}>
              Ok
            </ConfirmButton>
          </Modall>
        </Wrapper>
      </div>,
      document.body,
    )
    : null;
}

export default CartModal;
