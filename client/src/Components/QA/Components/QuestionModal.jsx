import React, { useContext, useState } from 'react';
import axios from 'axios';
import currentProducts from '../../../Contexts/CurProdContext';
import { ModalView } from './Styles/ModalView';
import { ModalBackground } from './Styles/ModalBackground';

function QuestionModal({ setShowModal }) {
  const { currentProd } = useContext(currentProducts);
  const [body, setBody] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);

  function onSubmit(e) {
    e.preventDefault();
    let formQuestion = body;
    let formNickname = nickname;
    let formEmail = email;

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      formEmail = null;
    }

    if (formQuestion === null || formNickname === null || formEmail === null) {
      let warn = '';

      if (!formQuestion) {
        warn += 'Your Question*';
      }
      if (!formNickname && warn.length > 1) {
        warn += '  What is your nickname*';
      } else if (!formNickname) {
        warn += 'What is your nickname*';
      }
      if (!formEmail && warn.length > 1) {
        warn += '  Your email*';
      } else if (!formEmail) {
        warn += 'Your email*';
      }

      alert('You must enter the following: ' + warn);
    } else {
      axios.post('qa/questions', {
        body: formQuestion,
        name: formNickname,
        email: formEmail,
        product_id: currentProd.id,
      })
        .then(() => setShowModal(false))
        .catch((err) => console.error(err));
    }
  }

  return (
    <ModalBackground>
      <ModalView>
        <div>
          <h2>Ask Your Question</h2>
          <h3>
            About the
            {currentProd.name}
          </h3>
          <div>
            <form noValidate onSubmit={() => onSubmit(event)}>
              <label htmlFor="newQuestion">
                Your Question
                <input type="text" id="newQuestion" maxLength="1000" onChange={() => setBody(event.target.value)} />
              </label>
              <label htmlFor="nickname">
                What is your nickname
                <input type="text" id="nickname" maxLength="60" placeholder="Example: jackson11!" onChange={() => setNickname(event.target.value)} />
              </label>
              <div>For privacy reasons, do not use your full name or email address</div>
              <label htmlFor="email">
                Your email
                <input type="email" id="email" maxLength="60" placeholder="Example: Jack@email.com" onChange={() => setEmail(event.target.value)} />
              </label>
              <div>For authentication reasons, you will not be emailed</div>
              <input type="submit" value="Submit question" />
            </form>
          </div>
          <button type="submit" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </ModalView>
    </ModalBackground>
  );
}

export default QuestionModal;
