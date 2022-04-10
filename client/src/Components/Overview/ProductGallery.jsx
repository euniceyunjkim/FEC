import React, { useState } from 'react';
import styled from 'styled-components';
import EModal from './EModal.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';

const Carouselcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  width: 100%;
  height: 725px;
`;

const Carouselinner = styled.div`
flex: 80%;
background-size: cover;
background-position: center;
display: flex;
height: 100%;
width: 850px;
background-image: ${({ src }) => `url(${src})`};
position: relative;
`;

const ThumbnailContainer = styled.div`
flex: 15%;
height: 100%;
padding-right: 15px;
left: -1px;
`;

const InnerLeft = styled.div`
top: 300px;
flex: 10%;
position: absolute;
height: 90px;
width: 90px;
&:hover {
  ${({ styles }) => `${styles}`};
}
display: grid;
place-items: center;
`;

const InnerRight = styled.div`
right: -1px;
position: absolute;
top: 300px;
flex: 10%;
height: 90px;
width: 90px;
display: grid;
place-items: center;
&:hover {
  ${({ styles }) => `${styles}`};
}
`;

const InnerCenter = styled.div`
flex: 86%;
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

function ProductGallery({ index, setIndex, photos }) {
  const [show, setShow] = useState(false);

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

  const styles = {
    show: 'background-color: rgb(75,21,163,0.6); border-radius: 60%; cursor: pointer;',
  };

  return (
    <Carouselcontainer>
      <ThumbnailContainer>
        <ThumbnailCarousel index={index} setIndex={setIndex} photos={photos} />
      </ThumbnailContainer>
      {photos.length > 0 && (
        <Carouselinner src={photos[index].url ? photos[index].url : 'assets/NoImage.png'}>
          <InnerLeft onClick={() => flipper(-1)} styles={index === 0 ? null : styles.show}>
            {index === 0 ? null : <img alt="" src="overview_imgs/LightLArrow.png" />}
          </InnerLeft>
          <InnerCenter />
          <InnerRight
            onClick={() => flipper(1)}
            styles={index === photos.length - 1 ? null : styles.show}
          >
            {index === photos.length - 1 ? null : <img alt="" src="overview_imgs/LightRArrow.png" />}
          </InnerRight>
          <Expand
            onClick={() => toggleShow()}
          />
          <EModal expand={photos[index].url ? photos[index].url : 'assets/NoImage.png'} show={show} hideModal={toggleShow} photos={photos} flipper={flipper} index={index} setIndex={setIndex}/>
        </Carouselinner>
      )}
    </Carouselcontainer>
  );
}

export default ProductGallery;
