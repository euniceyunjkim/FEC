import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import {
  Wrapper, Space, Modall, Area, ArrowL, ArrowR, PicContainer, Pic,
  Minimize, ThumbContainer, Thumbs,
} from './StyledComps/EModalStyle';

function EModal({
  show, hideModal, expand, photos, index, flipper,
}) {
  const [click, setClick] = useState(false);

  const magArea = document.getElementById('zoomarea');
  const magPic = document.getElementById('zoompic');

  function clicker() {
    setClick(!click);
  }

  function zoom(event) {
    let clientX = event.clientX - magArea.offsetLeft;
    let clientY = event.clientY - magArea.offsetTop;

    const mWidth = magArea.offsetWidth;
    const mHeight = magArea.offsetHeight;

    clientX = (clientX / mWidth) * 100;
    clientY = (clientY / mHeight) * 100;

    if (magPic) {
      magPic.style.transform = `translate(-${clientX}%, -${clientY}%) scale(2.5)`;
    }
  }

  function norm() {
    if (magPic) {
      magPic.style.transform = 'translate(-50%,-50%) scale(1)';
    }
  }

  const styles = {
    unclicked: 'cursor: zoom-in;',
    clicked: 'cursor: zoom-out;',
    show: 'background-color: rgb(255, 255, 255, 0.6); border-radius: 60%; cursor: pointer;',
  };

  return show
    ? createPortal(
      <div>
        <Wrapper>
          <Space />
          <Modall>
            <Area id="zoomarea">
              <ArrowL onClick={() => flipper(-1)} styles={index === 0 ? null : styles.show}>
                {index === 0 || click ? null : <img alt="" src="overview_imgs/LightLArrow.webp" />}
              </ArrowL>
              <PicContainer>
                <Pic
                  id="zoompic"
                  src={expand}
                  styles={click ? styles.clicked : styles.unclicked}
                  onClick={() => clicker()}
                  onMouseMove={click ? (e) => zoom(e) : () => norm()}
                  onMouseLeave={click ? () => norm() : null}
                />
              </PicContainer>
              {click ? null : <Minimize onClick={hideModal} />}
              <ArrowR
                onClick={() => flipper(1)}
                styles={index === photos.length - 1 ? null : styles.show}
              >
                {index === photos.length - 1 || click ? null : <img alt="" src="overview_imgs/LightRArrow.webp" />}
              </ArrowR>
            </Area>
            <ThumbContainer>
              {photos && photos.map((photo, i) => <Thumbs key={photo.url} src={photo.thumbnail_url ? photo.thumbnail_url : 'assets/NoImage.webp'} styles={index === i ? 'border: 4px solid white;' : null} />)}
            </ThumbContainer>
          </Modall>
        </Wrapper>
      </div>,
      document.body,
    )
    : null;
}

EModal.propTypes = {
  photos: PropTypes.instanceOf(Array).isRequired,
};

export default EModal;
