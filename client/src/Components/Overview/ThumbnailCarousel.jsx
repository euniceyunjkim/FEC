import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

function ThumbnailCarousel({ }) {
  const [photos, setPhotos] = useState([]);
  const { curStyle } = useContext(currentStyle);
  const [index, setIndex] = useState(0);

  return (
    <div>
      Thumbnail Carousel (Vertical)
    </div>
  );
}

export default ThumbnailCarousel;
