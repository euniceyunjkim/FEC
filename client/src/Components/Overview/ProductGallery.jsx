import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';
import EModal from './EModal.jsx';

const Carouselcontainer = styled.div`
  overflow: hidden;
  width: 600px;
  height: 725px;
`;
const Carouselinner = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  height: 100%;
  width: 100%;
  background-image: ${({ src }) => `url(${src})`};
  position: relative;
`;

const InnerLeft = styled.div`
top: 300px;
flex: 5%;
position: absolute;
height: 90px;
width: 90px;
&:hover {
  background-color: rgb(75,21,163,0.6);
  border-radius: 60%;
}
display: grid;
place-items: center;
cursor: pointer;
`;

const InnerRight = styled.div`
right: -1px;
position: absolute;
top: 300px;
flex: 5%;
height: 90px;
width: 90px;
&:hover {
  background-color: rgb(75,21,163,0.6);
  border-radius: 60%;
}
display: grid;
place-items: center;
cursor: pointer;
`;

const InnerCenter = styled.div`
flex: 90%;
height: 100%;
`;

const Expand = styled.div`
  top: -1px;
  right: -1px;
  margin: 5px;
  z-index: 9;
  height: 30px;
  width: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('overview_imgs/WExpand.png');
  &:hover {
    cursor: pointer;
    background-image: url('overview_imgs/WWExpand.png');
  }
  position: absolute;
`;

function ProductGallery({ }) {
  const [photos, setPhotos] = useState([]);
  const { curStyle } = useContext(currentStyle);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (curStyle.photos) {
      setPhotos(curStyle.photos);
      setIndex(0);
    }
  }, [curStyle]);

  function toggleShow() {
    setShow(!show);
  }

  function flipper(num) {
    if (num > 0) {
      if (index < (photos.length - 1)) {
        setIndex(index + num);
      } else if (index === (photos.length - 1)) {
        setIndex(photos.length - 1);
      }
    } else if (num < 0) {
      if (index > 0) {
        setIndex(index + num);
      } else if (index === 0) {
        setIndex(0);
      }
    }
  }

  return (
    <Carouselcontainer>
      {photos.length > 0 && (
        <Carouselinner src={photos[index].url}>
          <InnerLeft onClick={() => flipper(-1)}>
            <img alt="" src="overview_imgs/LightLArrow.png" />
          </InnerLeft>
          <InnerCenter />
          <InnerRight onClick={() => flipper(1)}>
            <img alt="" src="overview_imgs/LightRArrow.png" />
          </InnerRight>
          <Expand
            onClick={() => toggleShow()}/>
          <EModal expand={photos[index].url} show={show} hideModal={toggleShow} />
        </Carouselinner>
      )}

    </Carouselcontainer>
  );
}

export default ProductGallery;
