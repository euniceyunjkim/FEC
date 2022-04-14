import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Box from './css/container';
import PickRating from './pickRating';
import PickCharacteristics from './pickCharacteristics';
import currentProducts from '../../Contexts/CurProdContext';

const axios = require('axios');

// creats modal that allows user to right review
const WriteReview = function WriteReview({ setRenderModal, setRender, characteristics }) {
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [char] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { currentProd } = useContext(currentProducts);
  // when the user clicks the submit button
  const submitHandler = function submitHandler() {
    const customAlert = alert;
    if (rating === 0) {
      customAlert('rating has not been filed');
    } else if (recommend === null) {
      customAlert('recommend has not been filed');
    } else if (summary === '') {
      // take this one out and put in char
      customAlert('summary has not been filed');
    } else if (body.length < 50) {
      customAlert('body has not been filed');
    } else if (name === '') {
      customAlert('name has not been filed');
      // eslint-disable-next-line
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      customAlert('email is not valid');
    } else if (Object.keys(characteristics).length !== Object.keys(char).length) {
      customAlert('characteristics has not been filed');
    } else {
      axios.post('reviews/post', {
        product_id: currentProd.id,
        rating,
        summary,
        body,
        recommend,
        name,
        email,
        photos: [],
        characteristics: char,
      })
        .then(() => setRenderModal(false))
        .catch(() => new Error('error in axios'));
    }
  };
  return (
    <div>
      <Box.Modal>
        <Box.ModalContent>
          <Box.Close onClick={() => setRender(false)}><div>X</div></Box.Close>
          <Box.CenterInfo>
            <Box.Info>
              *Overall rating:
              <PickRating rating={rating} setRating={setRating} />
              <br />
              *Recommend:
              <form>
                {recommend === true
                  ? <Box.StarCheck src="./assets/fullCircle.webp" alt="full circle" onClick={() => setRecommend(true)} />
                  : <Box.StarCheck src="./assets/emptyCircle.webp" alt="empty circle" onClick={() => setRecommend(true)} />}
                Yes
                {recommend === false
                  ? <Box.StarCheck src="./assets/fullCircle.webp" alt="full circle" onClick={() => setRecommend(false)} />
                  : <Box.StarCheck src="./assets/emptyCircle.webp" alt="empty circle" onClick={() => setRecommend(false)} />}
                No
              </form>
              <br />
              *Characteristics
              {Object.keys(characteristics).map((e) => (
                <PickCharacteristics
                  key={characteristics[e].id}
                  charKey={characteristics[e].id}
                  lable={e}
                  char={char}
                />
              ))}
              <div>
                <br />
                Review summary
              </div>
              <input type="text" name="sum" required maxLength="60" size="60" value={summary} onChange={(e) => setSummary(e.target.value)} />
              <div>
                <br />
                *Review Body
              </div>
              <input type="text" name="sum" required maxLength="1000" size="60" value={body} onChange={(e) => setBody(e.target.value)} />
              <br />
              {body.length}
              /50 minimum of 50 characters to submit.
              <br />
              <br />
              *Nickname
              <input type="text" name="sum" required maxLength="60" size="30" value={name} onChange={(e) => setName(e.target.value)} />
              <br />
              <br />
              *Email
              <input type="text" name="sum" required maxLength="60" size="30" value={email} onChange={(e) => setEmail(e.target.value)} />
              <br />
              <br />
              <button type="button" onClick={() => submitHandler()}>
                Submit
              </button>
            </Box.Info>
          </Box.CenterInfo>
        </Box.ModalContent>
      </Box.Modal>
    </div>
  );
};
WriteReview.propTypes = {
  setRenderModal: PropTypes.func.isRequired,
  setRender: PropTypes.func.isRequired,
  characteristics: PropTypes.instanceOf(Object).isRequired,
};
export default WriteReview;
