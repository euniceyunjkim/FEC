import React, { useState, useEffect } from 'react';
import {
  CarouselContainer, Prev, Next, Carousel, Thumbnails,
} from './StyledComps/ThumbnailCarouselStyle.js';

function ThumbnailCarousel({ index, setIndex, photos }) {
  const pLength = photos.length;
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(6);

  function prev() {
    if ((first - 7) > 0) {
      setFirst(first - 7);
      setLast(first - 1);
    } else {
      setFirst(0);
      setLast(6);
    }
  }

  function next() {
    if ((first + 7) < (pLength)) {
      setFirst(first + 7);
      if ((last + 7) < (pLength)) {
        setLast(last + 7);
      } else {
        setLast(pLength - 1);
      }
    }
  }

  return (
    <CarouselContainer>
      <Prev
        arrow={first === 0 ? null : 'overview_imgs/Up.webp'}
        styles={first === 0 ? null : 'cursor: pointer;'}
        onClick={() => prev()}
      />
      <Carousel>
        {photos && photos.map((photo, i) => ((i >= first && i <= last ? (
          <Thumbnails key={i}
            src={photos[i].thumbnail_url ? photos[i].thumbnail_url : 'assets/NoImage.webp'}
            onClick={() => setIndex(i)}
            styles={index === i ? 'border: 4px solid #4b15a3;' : null}
          />
        ) : null)))}
      </Carousel>
      <Next
        arrow={pLength < 8 || last === pLength - 1 ? null : 'overview_imgs/Down.webp'}
        styles={pLength < 8 || last === pLength - 1 ? null : 'cursor: pointer;'}
        onClick={() => next()}
      />
    </CarouselContainer>
  );
}

export default ThumbnailCarousel;
