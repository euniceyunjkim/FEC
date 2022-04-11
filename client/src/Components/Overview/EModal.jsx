import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
display: flex;
justify-content: space-between;
right: 0;
outline: 0;
overflow-x: hidden;
overflow-y: auto;
position: fixed;
width: 100%;
height: 900px;
z-index: 1000;
top: 125px;
justify-content: center;
`;

const Space = styled.div`
order: 1;
`;

const Modall = styled.div`
order: 2;
display: grid;
animation: fadeIn 0.2s ease-in-out;
background: rgb(75, 21, 163, 0.8);
border-radius: 0.25rem;
display: flex;
width: 95%;
height: 100%;
z-index: 100;
flex-direction: column;
position: relative;
`;

const Area = styled.div`
width: 100%;
height: 100%;
display: flex;
place-items: center;
justify-content: center;
`;

const ArrowL = styled.div`
order: 1;
margin-right: 25px;
height: 90px;
width: 90px;
&:hover {
  ${({ styles }) => `${styles}`};
}
display: grid;
place-items: center;
`;

const PicContainer = styled.div`
order: 2;
overflow: hidden;
position: relative;
width: 800px;
height: 80%;
`;

const Pic = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
background-size: contain;
background-position: center;
${({ styles }) => `${styles}`};
`;

const ArrowR = styled.div`
order: 3;
margin-left: 25px;
top: 45%;
height: 90px;
width: 90px;
display: grid;
place-items: center;
&:hover {
  ${({ styles }) => `${styles}`};
}
`;

const Minimize = styled.div`
margin: 5px;
top: -1px;
right: -1px;
position: absolute;
width: 30px;
height: 30px;
background-image: url('overview_imgs/WMin.webp');
background-repeat: no-repeat;
background-size: contain;
background-position: center;

&:hover {
  background-image: url('overview_imgs/WWMin.webp');
  cursor: pointer;
}
`;

const ThumbContainer = styled.div`
// z-index: 2;
width: 100%;
height: 150px;
display: flex;
margin-top: 5px;
margin-bottom: 5px;
`;

const Thumbs = styled.div`
margin: 5px auto;
display: block;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-image: ${({ src }) => `url(${src})`};
height: 85px;
width: 85px;
border-radius: 50%;
${({ styles }) => `${styles}`};
`;

function EModal({ show, hideModal, expand, photos, index, flipper }) {
  const [click, setClick] = useState(false);

  const magArea = document.getElementById('zoomarea');
  const magPic = document.getElementById('zoompic');

  function clicker() {
    setClick(!click);
  }

  function zoom(event) {
    let clientX = event.clientX - magArea.offsetLeft;
    let clientY = event.clientY - magArea.offsetTop;

    let mWidth = magArea.offsetWidth;
    let mHeight = magArea.offsetHeight;

    clientX = clientX / mWidth * 100;
    clientY = clientY / mHeight * 100;

    if (magPic) {
      magPic.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2.5)';
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
                <Pic id="zoompic" src={expand} styles={click ? styles.clicked : styles.unclicked}
                  onClick={() => clicker()}
                  onMouseMove={click ? (e) => zoom(e) : () => norm()}
                  onMouseLeave={click ? () => norm() : null}
                />
              </PicContainer>
              {click ? null : <Minimize onClick={hideModal} />}
              <ArrowR onClick={() => flipper(1)}
                styles={index === photos.length - 1 ? null : styles.show}>
                {index === photos.length - 1 || click ? null : <img alt="" src="overview_imgs/LightRArrow.webp" />}
              </ArrowR>
            </Area>
            <ThumbContainer>
              {photos.map((photo, i) => <Thumbs key={i} src={photo.thumbnail_url ? photo.thumbnail_url : 'assets/NoImage.webp'} styles={index === i ? 'border: 4px solid white;' : null} />)}
            </ThumbContainer>
          </Modall>
        </Wrapper>
      </div>,
      document.body,
    )
    : null;
}

export default EModal;
