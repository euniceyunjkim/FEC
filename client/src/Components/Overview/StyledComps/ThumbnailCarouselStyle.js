import styled from 'styled-components';

export const CarouselContainer = styled.div`
display: grid;
grid-template: 1fr/1fr;
width: 125px;
height: 725px;
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
width: 95px;
height: 640px;
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
height: 85px;
width: 85px;
border-radius: 50%;
&:hover {
  cursor: pointer;
}
${({ styles }) => `${styles}`};
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
