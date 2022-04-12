import React from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {
  Overlay, Wrapper, Modall, Warning, ConfirmButton,
} from './StyledComps/ModalStyle';

function Modal({ shown, hideModal }) {
  return shown
    ? createPortal(
      <div>
        <Overlay />
        <Wrapper>
          <Modall>
            <Warning>
              Please select a size!
            </Warning>
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

Modal.propTypes = {
  shown: PropTypes.boolean,
  hideModal: PropTypes.func,
};

export default Modal;
