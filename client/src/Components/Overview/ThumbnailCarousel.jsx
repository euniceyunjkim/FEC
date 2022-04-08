import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

const Prev = styled.button`
`;
const Next = styled.button`
`;

const Carousel = styled.div`
`;

const Slides = styled.div``;

const CarouselInner = styled.div``;

function ThumbnailCarousel({ }) {
  const [thumbnails, setThumbnails] = useState([]);
  const { curStyle } = useContext(currentStyle);

  return (
    <div>
      <Prev/>
      Thumbnail Carousel (Vertical)
      <Next/>
    </div>
  );
}

export default ThumbnailCarousel;
