import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
display: grid;
grid-template: 1fr/1fr;
width: 125px;
height: 725px;
place-items: center;
`;

const Prev = styled.div`
z-index: 1;
margin: 2px 0;
height: 40px;
width: 80px;
background-image: ${({ arrow }) => `url(${arrow})`};
background-repeat: no-repeat;
background-position: center;
background-size: contain;
&:hover {
  ${({ styles }) => `${styles}`};
}
`;

const Carousel = styled.div`
z-index: 2;
width: 95px;
height: 640px;
overflow: hidden;
place-items: center;
`;

const Thumbnails = styled.div`
margin: 5px auto;
display: block;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-image: ${({ src }) => `url(${src})`};
height: 85px;
width: 85px;
border-radius: 50%;
&:hover {
  cursor: pointer;
}
${({ styles }) => `${styles}`};
`;

const Next = styled.div`
z-index: 3;
margin: 2px 0;
height: 40px;
width: 80px;
background-image: ${({ arrow }) => `url(${arrow})`};
background-repeat: no-repeat;
background-position: center;
background-size: contain;
&:hover {
  ${({ styles }) => `${styles}`};
}
`;

function ThumbnailCarousel({ index, setIndex, photos }) {
  const pLength = photos.length;
  const [first, setFirst] = useState(0);
  const [last, setLast] = useState(6);

  function prev() {
    if ((first - 7) >= 0) {
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
        arrow={first === 0 ? null : 'overview_imgs/Up.png'}
        styles={first === 0 ? null : 'cursor: pointer;'}
        onClick={() => prev()}
      />
        {console.log(first)}
        {console.log(last)}
      <Carousel>
        {photos.map((photo, i) => ((i >= first && i <= last ? (
          <Thumbnails key={i}
            src={photos[i].thumbnail_url}
            onClick={() => setIndex(i)}
            styles={index === i ? 'border: 4px solid #4b15a3;' : null} />
        ) : null)))}
      </Carousel>
      <Next
        arrow={pLength < 8 || last === pLength - 1 ? null : 'overview_imgs/Down.png'}
        styles={pLength < 8 || last === pLength - 1 ? null : 'cursor: pointer;'}
        onClick={() => next()}
      />
    </CarouselContainer>
  );
}

export default ThumbnailCarousel;
