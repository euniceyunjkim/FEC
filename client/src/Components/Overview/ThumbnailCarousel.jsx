import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

function ThumbnailCarousel({ }) {
  const [thumbnails, setThumbnails] = useState([]);
  const { curStyle } = useContext(currentStyle);

  return (
    <div>
      Thumbnail Carousel (Vertical)
    </div>
  );
}

export default ThumbnailCarousel;
