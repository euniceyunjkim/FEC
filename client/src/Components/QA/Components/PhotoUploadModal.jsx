import React, { useState } from 'react';
import ModalView from './Styles/ModalView';
import ModalBackground from './Styles/ModalBackground';

function UploadPhotoModal({ photos, setPhoto, setAddPhoto }) {
  const [url, setUrl] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setPhoto(photos.slice().concat(url));
    setAddPhoto(false);
  }

  return (
    <ModalBackground>
      <ModalView>
        <div>
          <h4>Add a photo url</h4>
          <form noValidate onSubmit={onSubmit}>
            <label htmlFor="newPhoto">
              <input type="url" id="newAnswer" maxLength="60" onChange={() => setUrl} />
            </label>
            <input type="submit" value="Submit photo" />
          </form>
        </div>
        <button type="submit" onClick={() => setAddPhoto(false)}>Cancel</button>
      </ModalView>
    </ModalBackground>
  );
}

export default UploadPhotoModal;
