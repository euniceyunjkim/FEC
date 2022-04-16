import React, { useContext, useState } from 'react';
import axios from 'axios';
import currentProducts from '../../../Contexts/CurProdContext';
import ModalBackground from './Styles/ModalBackground';
import { MainButtons } from './Styles/Buttons';
import {
  ModalView,
  FormContainer,
  HeadersContainer,
  Label,
  Input,
  Input2,
  Disclaimer,
  StyledTitle,
  ButtonContainer,
  CancelContainer,
} from './Styles/ModalView';

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
        <FormContainer>
          <HeadersContainer>
            <StyledTitle>Ask Your Question</StyledTitle>
            <h3>
              About the
              {currentProd.name}
            </h3>
          </HeadersContainer>
          <div>
            <form noValidate onSubmit={() => onSubmit(event)}>
              <Label htmlFor="newQuestion">
                Your Question
                <Input type="text" id="newQuestion" maxLength="1000" onChange={() => setBody(event.target.value)} />
              </Label>
              <Label htmlFor="nickname">
                What is your nickname
                <Input2 type="text" id="nickname" maxLength="60" placeholder="Example: jackson11!" onChange={() => setNickname(event.target.value)} />
              </Label>
              <Disclaimer>
                For privacy reasons, do not use your full name or email address
              </Disclaimer>
              <Label htmlFor="email">
                Your email
                <Input2 type="email" id="email" maxLength="60" placeholder="Example: Jack@email.com" onChange={() => setEmail(event.target.value)} />
              </Label>
              <Disclaimer>For authentication reasons, you will not be emailed</Disclaimer>
              <ButtonContainer>
                <MainButtons type="submit">Submit question</MainButtons>
              </ButtonContainer>
            </form>
          </div>
          <CancelContainer>
            <MainButtons type="submit" onClick={() => setShowModal(false)}>Cancel</MainButtons>
          </CancelContainer>
        </FormContainer>
      </ModalView>
    </ModalBackground>
  );
}

export default QuestionModal;
