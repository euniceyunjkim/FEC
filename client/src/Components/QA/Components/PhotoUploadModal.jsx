import React, { useState } from 'react';
import ModalBackground from './Styles/ModalBackground';
import { MainButtons } from './Styles/Buttons';
import {
  PhotoModalView,
  FormContainer,
  HeadersContainer,
  Label,
  Input2,
  StyledTitle,
  ButtonContainer,
  CancelContainer,
} from './Styles/ModalView';

function UploadPhotoModal({ photos, setPhoto, setAddPhoto }) {
  const [url, setUrl] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    setPhoto(photos.slice().concat(url));
    setAddPhoto(false);
  }

  return (
    <ModalBackground>
      <PhotoModalView>
        <FormContainer>
          <HeadersContainer>
            <StyledTitle>Add a photo url</StyledTitle>
          </HeadersContainer>
          <form noValidate onSubmit={onSubmit}>
            <Label htmlFor="newPhoto">
              Your Photos
              <Input2 placeholder="https://website.com/photos/VwqecUsYKvs" type="url" id="newAnswer" maxLength="60" onChange={() => setUrl} />
            </Label>
            <ButtonContainer>
              <MainButtons type="submit">Submit photo</MainButtons>
            </ButtonContainer>
          </form>
        </FormContainer>
        <CancelContainer>
          <MainButtons type="submit" onClick={() => setAddPhoto(false)}>Cancel</MainButtons>
        </CancelContainer>
      </PhotoModalView>
    </ModalBackground>
  );
}

export default UploadPhotoModal;
