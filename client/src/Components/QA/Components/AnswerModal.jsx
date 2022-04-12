import React, { useContext } from 'react';
import currentProducts from '../../../Contexts/CurProdContext.js';
import { ModalView } from './Styles/modalView.js';
import { ModalBackground } from './Styles/modalBackground.js'

function AnswerModal({ setShowModal }) {
  const { currentProd } = useContext(currentProducts);

  return (
    <ModalBackground>
      <ModalView>
        <form>
          <label htmlFor="newAnswer">
            Your Answer*
            <input type="text" id="newAnswer" maxLength="1000" required />
          </label>
          <label htmlFor="nickname">
            What is your nickname*
            <input type="text" id="nickname" maxLength="60" placeholder="Example: jack543!" required />
          </label>
          <div>For privacy reasons, do not use your full name or email address</div>
          <label htmlFor="email">
            Your email*
            <input type="email" id="email" maxLength="60" placeholder="Example: Jack@email.com" required />
          </label>
          <div>For authentication reasons, you will not be emailed</div>
          <input type="submit" value="Submit answer" />
          <button type="submit" onClick={() => setShowModal(false)}>Cancel</button>
        </form>
      </ModalView>
    </ModalBackground>
  );
}

export default AnswerModal;
