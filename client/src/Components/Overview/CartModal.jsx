import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {
  Wrapper, Space, Modall, ConfirmButton, Cart, Item, Pic, Name, Count,
  Delete,
} from './StyledComps/CartModalStyle';

function CartModal({ show, hideModal, cart }) {
  return show
    ? createPortal(
      <div>
        <Wrapper>
          <Space />
          <Modall>
            <Cart>
              {cart && cart.map((item) => (
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

CartModal.propTypes = {
  cart: PropTypes.instanceOf(Array).isRequired,
};

export default CartModal;
