import React, {useContext} from 'react';
import currentProducts from '../../../Contexts/CurProdContext.js';
import { ModalView } from './Styles/modalView.js';
import { ModalBackground } from './Styles/modalBackground.js'

function Modal({ setShowModal }) {
  const {currentProd} = useContext(currentProducts);

  return (
    <ModalBackground>
      <ModalView>
        <form>
          <label htmlFor="newQuestion">
            Your Question
            <input type="text" id="newQuestion" maxLength="1000" required />
          </label>
          <label htmlFor="nickname">
            What is your nickname
            <input type="text" id="nickname" maxLength="60" placeholder="Example: jackson11!" required />
          </label>
          <div>For privacy reasons, do not use your full name or email address</div>
          <label htmlFor="email">
            Your email
            <input type="email" id="email" maxLength="60" placeholder="Why did you like the roduct or not?" required />
          </label>
          <div>For authentication reasons, you will not be emailed</div>
          <input type="submit" value="Submit question" />
          <button type="submit" onClick={() => setShowModal(false)}>Cancel</button>
        </form>
      </ModalView>
    </ModalBackground>
  );
}

export default Modal;
