import styled from 'styled-components';

export const Carouselcontainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const Carouselinner = styled.div`
flex: 80%;
background-size: cover;
background-position: center;
display: flex;
height: 100%;
width: 850px;
background-image: ${({ src }) => `url(${src})`};
position: relative;
`;

export const ThumbnailContainer = styled.div`
flex: 15%;
height: 100%;
width: 100%;
left: -1px;
`;

export const InnerLeft = styled.div`
top: 300px;
flex: 10%;
position: absolute;
height: 90px;
width: 90px;
&:hover {
  ${({ styles }) => `${styles}`};
}
display: grid;
place-items: center;
`;

export const InnerRight = styled.div`
right: -1px;
position: absolute;
top: 300px;
flex: 10%;
height: 90px;
width: 90px;
display: grid;
place-items: center;
&:hover {
  ${({ styles }) => `${styles}`};
}
`;

export const InnerCenter = styled.div`
flex: 86%;
height: 100%;
`;

export const Expand = styled.div`
  top: -1px;
  right: -1px;
  margin: 5px;
  z-index: 9;
  height: 30px;
  width: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('overview_imgs/WExpand.webp');
  &:hover {
    cursor: pointer;
    background-image: url('overview_imgs/WWExpand.webp');
  }
  position: absolute;
`;
