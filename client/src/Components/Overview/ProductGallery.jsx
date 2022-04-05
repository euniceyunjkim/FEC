import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';
import CarouselItem from './CarouselItem.jsx';

const Carouselcontainer = styled.div`
  overflow: hidden;
`;
const Carouselinner = styled.div`
  white-space: nowrap;
  transition: transform 0.3s;
`;
const Carouselitem = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  background-color: green;
  color: #fff;
`;

function ProductGallery({ }) {
  const [photos, setPhotos] = useState([]);
  const { curStyle } = useContext(currentStyle);
  const [activeIndex, setIndex] = useState(0);

  useEffect(() => {
    if (curStyle.style_id) {
      setPhotos(curStyle.photos);
    }
  }, [curStyle]);

  return (
    <Carouselcontainer>
      <Carouselinner>
        <Carouselitem style={{transform: `translateX(-${activeIndex * 100}%)` }}>
          {photos.map((photo) => <CarouselItem key={photo.url} photo={photo} width="100%" />)}
        </Carouselitem>
      </Carouselinner>
    </Carouselcontainer>
  );
}

export default ProductGallery;
