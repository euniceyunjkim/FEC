import React from 'react';
import { createPortal } from 'react-dom';
import {
  Wrapper, Space, Modall, ConfirmButton, Cart, Item, Pic, Name, Count,
  Delete,
} from './StyledComps/CartModalStyle.js';

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
                  <Pic src="assets/fullStar.webp" />
                  <Name>{item.sku_id}</Name>
                  <Count>
                    QTY
                    {item.count}
                  </Count>
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
