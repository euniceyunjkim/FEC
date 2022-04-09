import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
display: grid;
grid-template: 1fr/1fr;
width: 90px;
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
width: 90px;
height: 645px;
overflow: hidden;
`;

const Thumbnails = styled.div`
margin: 2px auto;
display: block;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-image: ${({ src }) => `url(${src})`};
height: 90px;
width: 90px;
border-radius: 50%;
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
  const [images, setImage] = useState([]);
  const length = photos.length;
  const [cur, setCur] = useState(0);

  function prev() {
    setCur(cur === length - 7 ? 0 : cur + 1);
  }

  function next() {
    setCur(cur === 0 ? length - 7 : cur - 1);
  }

  return (
    <CarouselContainer>
      <Prev
        arrow={index === 0 ? null : 'overview_imgs/Up.png'}
        styles={index === 0 ? null : 'cursor: pointer;'}
        onClick={() => prev()}
      />
      <Carousel>
        {photos.map((photo, i) => (<Thumbnails key={i} src={photo.thumbnail_url} />))}
      </Carousel>
      <Next
        arrow={length <= 7 ? null : 'overview_imgs/Down.png'}
        styles={length <= 7 ? null : 'cursor: pointer;'}
        onClick={() => next()}
      />
    </CarouselContainer>
  );
}

export default ThumbnailCarousel;
