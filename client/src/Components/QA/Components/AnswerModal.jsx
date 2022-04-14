import React, { useContext, useState } from 'react';
import axios from 'axios';
import currentProducts from '../../../Contexts/CurProdContext';
import ModalView from './Styles/ModalView';
import ModalBackground from './Styles/ModalBackground';
import PhotoUploadModal from './PhotoUploadModal';

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
        <div>
          <h2>Submit your Answer</h2>
          <h3>
            {currentProd.name}
            :
            {question.question_body}
          </h3>
          <div>
            <form noValidate onSubmit={() => onSubmit(event)}>
              <label htmlFor="newAnswer">
                Your Answer*
                <input type="text" id="newAnswer" maxLength="1000" required onChange={() => setBody(event.target.value)} />
              </label>
              <label htmlFor="nickname">
                What is your nickname*
                <input type="text" id="nickname" maxLength="60" placeholder="Example: jack543!" onChange={() => setNickname(event.target.value)} />
              </label>
              <div>For privacy reasons, do not use your full name or email address</div>
              <label htmlFor="email">
                Your email*
                <input type="email" id="email" maxLength="60" placeholder="Example: Jack@email.com" onChange={() => setEmail(event.target.value)} />
              </label>
              <div>For authentication reasons, you will not be emailed</div>
              {photos.length > 0
                ? photos.map((photo) => <img src={photo} alt="upload" />)
                : null}
              {photos.length < 5
                ? <button type="button" onClick={() => setAddPhoto(true)}>Upload your photos</button>
                : <div>Maximum photos allowed</div>}
              <input type="submit" value="Submit answer" />
            </form>
          </div>
          <button type="button" onClick={() => setShowModal(false)}>Cancel</button>
          {addPhoto
            ? (
              <PhotoUploadModal
                photos={photos}
                setPhoto={setPhoto}
                setAddPhoto={setAddPhoto}
              />
            ) : null}
        </div>
      </ModalView>
    </ModalBackground>
  );
}

export default AnswerModal;
