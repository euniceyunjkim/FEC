import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

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
`;

const InnerLeft = styled.div`
flex: 5%;
height: 100%;
&:hover { background-color: rgb(75,21,163,0.6);}
display: grid;
place-items: center;
cursor: pointer;
`;

const InnerRight = styled.div`
flex: 5%;
height: 100%;
&:hover { background-color: rgb(75,21,163,0.6);
  }
display: grid;
place-items: center;
cursor: pointer;
`;

const InnerCenter = styled.div`
flex: 90%;
height: 100%;
`;

function ProductGallery({ }) {
  const [photos, setPhotos] = useState([]);
  const { curStyle } = useContext(currentStyle);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (curStyle.photos) {
      setPhotos(curStyle.photos);
      setIndex(0);
    }
  }, [curStyle]);

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
        </Carouselinner>
      )}
    </Carouselcontainer>
  );
}

export default ProductGallery;
