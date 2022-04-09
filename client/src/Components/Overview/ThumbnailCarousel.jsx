import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

const CarouselContainer = styled.div`
display: grid;
grid-template: 1fr/1fr;
place-items: center;
`;

const Prev = styled.button`
z-index: 1;
`;
const Next = styled.button`
z-index: 2;
`;

const Carousel = styled.div`
z-index: 3;
`;

const Inner = styled.div`
`;

const Mid = styled.div`
`;

const Slides = styled.div``;

const CarouselInner = styled.div``;

function ThumbnailCarousel({ index, setIndex }) {
  const [thumbnails, setThumbnails] = useState([]);
  const { curStyle } = useContext(currentStyle);

  //function to change photos shown

  return (
    <CarouselContainer>
      <Inner>
      <Prev onClick={() => flipper(-1)} />
      <Mid>Thumbnail Carousel (Vertical)</Mid>
      <Next onClick={() => flipper(1)}/>
      </Inner>
    </CarouselContainer>
  );
}

export default ThumbnailCarousel;
