import React, { useState } from 'react';
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
z-index: 1000;
top: 125px;
justify-content: center;
`;

const Space = styled.div`
order: 1;
`;

const Modall = styled.div`
order: 2;
animation: fadeIn 0.2s ease-in-out;
background: rgb(75, 21, 163, 0.8);
border-radius: 0.25rem;
display: flex;
width: 95vw;
height: 80vh;
position: relative;
z-index: 100;
align-items: center;
justify-content: center;
`;

const Area = styled.div`
width: 800px;
height: 950px;
overflow: hidden;
position: relative;
`;

const Pic = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
z-index: 10;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
background-size: contain;
background-position: center;

${({ styles }) => `${styles}`};
`;

const Minimize = styled.div`
margin: 5px;
top: -1px;
right: -1px;
position: absolute;
width: 30px;
height: 30px;
background-image: url('overview_imgs/WMin.png');
background-repeat: no-repeat;
background-size: contain;
background-position: center;
&:hover {
  background-image: url('overview_imgs/WWMin.png')
}
`;

function EModal({ show, hideModal, expand }) {
  const [click, setClick] = useState(false);

  const styles = {
    unclicked: 'cursor: zoom-in;',
    clicked: 'cursor: zoom-out;',
  };

  function clicker() {
    setClick(!click);
  }

  if (click) {
    let magArea = document.getElementById('zoomarea');
    let magPic = document.getElementById('zoompic');

    magArea.addEventListener("mousemove", function (event) {
      let clientX = event.clientX - magArea.offsetLeft;
      let clientY = event.clientY - magArea.offsetTop;

      let mWidth = magArea.offsetWidth;
      let mHeight = magArea.offsetHeight;

      clientX = clientX / mWidth * 100;
      clientY = clientY / mHeight * 100;

      magPic.style.transform = 'translate(-' + clientX + '%, -' + clientY + '%) scale(2.5)'
    });

    magArea.addEventListener("mouseleave", function () {
      magPic.style.transform = 'translate(-50%,-50%) scale(1)'
    })
  }

  return show
    ? createPortal(
      <div>
        <Wrapper>
          <Space />
          <Modall>
            <Area id="zoomarea">
              <Pic id="zoompic" src={expand} styles={click ? styles.clicked : styles.unclicked}
                onClick={() => clicker()} />
            </Area>
            {click ? null : <Minimize onClick={hideModal} />}
          </Modall>
        </Wrapper>
      </div>,
      document.body,
    )
    : null;
}

export default EModal;
