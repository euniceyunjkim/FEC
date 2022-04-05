import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

const Carouselcontainer = styled.div`
  overflow: hidden;
  width: 55%;
  height: 850px;
  background-color: green;
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
flex: 10%;
height: 100%;
background-color: rgb(0,0,0,0.6);
`;

const InnerRight = styled.div`
flex: 10%;
height: 100%;
background-color: rgb(0,0,0,0.6);
`;

const InnerCenter = styled.div`
flex: 80%;
height: 100%;
`;

function ProductGallery({ }) {
  const [photos, setPhotos] = useState([]);
  const { curStyle } = useContext(currentStyle);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (curStyle.photos) {
      setPhotos(curStyle.photos);
    }
  }, [curStyle]);

  return (
    <Carouselcontainer>
      {photos.length > 0 && (
        <Carouselinner src={photos[index].thumbnail_url}>
          <InnerLeft />
          <InnerCenter />
          <InnerRight />
        </Carouselinner>
      )}
    </Carouselcontainer>
  );
}

export default ProductGallery;
