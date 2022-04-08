import React, { useState, useEffect, useContext } from 'react';
import Box from './css/container';
import PickRating from './pickRating.jsx'
import PickCharacteristics from './pickCharacteristics.jsx';
import currentProducts from '../../Contexts/CurProdContext';

const axios = require('axios');

const WriteReview = function ({ setRender, characteristics }) {
  const [rating, setRating] = useState(0);
  const [recommend, setRecommend] = useState(null);
  const [char, setChar] = useState({});
  const [summary, setSummary] = useState('');
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const { currentProd } = useContext(currentProducts);

  const submitHandler = function () {
    let failed = false;
    if (rating === 0) {
      alert('rating has not been filed');
      failed = true;
    } else if (recommend === null) {
      alert('recommend has not been filed');
      failed = true;
    } else if (summary === '') {
      //take this one out and put in char
      alert('summary has not been filed');
      failed = true;
    } else if (body.length < 50) {
      alert('body has not been filed');
      failed = true;
    } else if (name === '') {
      alert('name has not been filed');
      failed = true;
    } else if (email === '') {
      alert('email has not been filed');
      failed = true;
    } else if (Object.keys(characteristics).length !== Object.keys(char).length) {
      alert('characteristics has not been filed');
    } else {
      axios.post('http://localhost:3000/reviews', {
        product_id: currentProd.id,
        rating,
        summary,
        body,
        recommend,
        name,
        email,
        characteristics,
      })
        .then((res) => console.log(res))
        .catch(() => console.log('error in axios'));
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
                  ? <Box.StarCheck src="./assets/fullStar.png" alt="full star" onClick={() => setRecommend(true)} />
                  : <Box.StarCheck src="./assets/emptyStar.png" alt="empty star" onClick={() => setRecommend(true)} />}
                Yes
                {recommend === false
                  ? <Box.StarCheck src="./assets/fullStar.png" alt="full star" onClick={() => setRecommend(false)} />
                  : <Box.StarCheck src="./assets/emptyStar.png" alt="empty star" onClick={() => setRecommend(false)} />}
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
              <input type="text" name="sum" required maxLength="60" size="60" onChange={(e) => setSummary(e)} />
              <div>
                <br />
                *Review Body
              </div>
              <input type="text" name="sum" required minLenth="50" maxLength="1000" size="60" onChange={(e) => setBody(e)} />
              <br />
              Upload photo
              <br />
              <br />
              *Nickname
              <input type="text" name="sum" required maxLength="60" size="30" onChange={(e) => setName(e)} />
              <br />
              <br />
              *Email
              <input type="text" name="sum" required maxLength="60" size="30" onChange={(e) => setEmail(e)} />
              <br />
              <br />
              <button onClick={() => submitHandler()}>
                Submit
              </button>
            </Box.Info>
          </Box.CenterInfo>
        </Box.ModalContent>
      </Box.Modal>
    </div>
  );
};
export default WriteReview;
