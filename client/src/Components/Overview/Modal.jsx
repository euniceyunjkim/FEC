import React from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay, Wrapper, Modall, Warning, ConfirmButton,
} from './StyledComps/ModalStyle.js';

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

export default Modal;
