import React, { useContext, useState } from 'react';
import axios from 'axios';
import currentProducts from '../../../Contexts/CurProdContext';
import PhotoUploadModal from './PhotoUploadModal';
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
  Img,
} from './Styles/ModalView';

function AnswerModal({ setShowModal, question }) {
  const { currentProd } = useContext(currentProducts);
  const [body, setBody] = useState(null);
  const [nickname, setNickname] = useState(null);
  const [email, setEmail] = useState(null);
  const [photos, setPhoto] = useState([]);
  const [addPhoto, setAddPhoto] = useState(false);

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
        warn += 'Your Answer*';
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
      axios.post(`qa/questions/${question.question_id}/answers`, {
        body: formQuestion,
        name: formNickname,
        email: formEmail,
        photos,
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
            <StyledTitle>Submit your Answer</StyledTitle>
            <h3>
              {currentProd.name}
              :
              {question.question_body}
            </h3>
          </HeadersContainer>
          <div>
            <form noValidate onSubmit={() => onSubmit(event)}>
              <Label htmlFor="newAnswer">
                Your Answer*
                <Input
                  type="text"
                  id="newAnswer"
                  maxLength="1000"
                  required
                  onChange={() => setBody(event.target.value)}
                />
              </Label>
              <Label htmlFor="nickname">
                What is your nickname*
                <Input2 type="text" id="nickname" maxLength="60" placeholder="Example: jack543!" onChange={() => setNickname(event.target.value)} />
              </Label>
              <Disclaimer>
                For privacy reasons, do not use your full name or email address
              </Disclaimer>
              <Label htmlFor="email">
                Your email*
                <Input2 type="email" id="email" maxLength="60" placeholder="Example: Jack@email.com" onChange={() => setEmail(event.target.value)} />
              </Label>
              <Disclaimer>For authentication reasons, you will not be emailed</Disclaimer>
              {photos.length > 0
                ? photos.map((photo) => <Img src={photo} alt="upload" />)
                : null}
              <ButtonContainer>
                {photos.length < 5
                  ? <MainButtons type="button" onClick={() => setAddPhoto(true)}>Upload your photos</MainButtons>
                  : <div>Maximum photos allowed</div>}
                <MainButtons>Submit answer</MainButtons>
              </ButtonContainer>
            </form>
          </div>
          <CancelContainer>
            <MainButtons onClick={() => setShowModal(false)}>Cancel</MainButtons>
          </CancelContainer>
          {addPhoto
            ? (
              <PhotoUploadModal
                photos={photos}
                setPhoto={setPhoto}
                setAddPhoto={setAddPhoto}
              />
            ) : null}
        </FormContainer>
      </ModalView>
    </ModalBackground>
  );
}

export default AnswerModal;
