import React from 'react';
import { ModalStyle } from './StyledComps/ModalStyle.js';
import { ModalContent } from './StyledComps/ModalContentStyle.js';

const Modal = ({ setShowModal, showModal, compareData }) => {
  let featOne = compareData[0];
  let featTwo = compareData[1];

  return (
    <>{showModal ?
      (<ModalStyle block={showModal ? 'block' : 'none'}>
        <ModalContent>
          <div>Hi Gene and Amy</div>
          <button onClick={() => setShowModal()}>Close</button>
        </ModalContent>
      </ModalStyle>)
      : null}
      </>
    )
}

export default Modal;