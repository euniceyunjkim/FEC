import styled from 'styled-components';

export const CarouselContainer = styled.div`
display: grid;
width: 100%;
height: 100%;
place-items: center;
`;

export const Prev = styled.div`
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

export const Carousel = styled.div`
z-index: 2;
width: 100%;
height: 100%;
overflow: hidden;
place-items: center;
`;

export const Thumbnails = styled.div`
margin: 5px auto;
display: block;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-image: ${({ src }) => `url(${src})`};
height: 80px;
width: 80px;
border-radius: 50%;
&:hover {
  cursor: pointer;
  box-shadow: 2px 2px 5px rgb(75, 21, 163);
}
${({ styles }) => `${styles}`};
@media (max-width: 890px) {
  height: 50px;
  width: 50px;
}
@media (min-width: 1450px) {
  height: 95px;
  width: 95px;
}
@media (min-width: 1880px) {
  height: 120px;
  width: 120px;
}
`;

export const Next = styled.div`
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
