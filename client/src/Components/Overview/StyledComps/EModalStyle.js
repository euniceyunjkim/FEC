import styled from 'styled-components';

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
right: 0;
outline: 0;
overflow-x: hidden;
overflow-y: auto;
position: fixed;
width: 100%;
height: 900px;
z-index: 1000;
top: 125px;
justify-content: center;

`;

export const Space = styled.div`
order: 1;
`;

export const Modall = styled.div`
order: 2;
display: grid;
animation: fadeIn 0.2s ease-in-out;
background: rgb(75, 21, 163, 0.8);
border-radius: 0.25rem;
display: flex;
width: 95%;
height: 100%;
z-index: 100;
flex-direction: column;
position: relative;
`;

export const Area = styled.div`
width: 100%;
height: 100%;
display: flex;
place-items: center;
justify-content: center;
`;

export const ArrowL = styled.div`
order: 1;
margin-right: 25px;
height: 90px;
width: 90px;
&:hover {
  ${({ styles }) => `${styles}`};
}
display: grid;
place-items: center;
`;

export const PicContainer = styled.div`
order: 2;
overflow: hidden;
position: relative;
width: 800px;
height: 80%;
`;

export const Pic = styled.div`
width: 100%;
height: 100%;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
background-size: contain;
background-position: center;
${({ styles }) => `${styles}`};
`;

export const ArrowR = styled.div`
order: 3;
margin-left: 25px;
top: 45%;
height: 90px;
width: 90px;
display: grid;
place-items: center;
&:hover {
  ${({ styles }) => `${styles}`};
}
`;

export const Minimize = styled.div`
margin: 5px;
top: -1px;
right: -1px;
position: absolute;
width: 30px;
height: 30px;
background-image: url('overview_imgs/WMin.webp');
background-repeat: no-repeat;
background-size: contain;
background-position: center;

&:hover {
  background-image: url('overview_imgs/WWMin.webp');
  cursor: pointer;
}
`;

export const ThumbContainer = styled.div`
// z-index: 2;
width: 100%;
height: 150px;
display: flex;
margin-top: 5px;
margin-bottom: 5px;
`;

export const Thumbs = styled.div`
margin: 5px auto;
display: block;
background-size: cover;
background-repeat: no-repeat;
background-position: center;
background-image: ${({ src }) => `url(${src})`};
height: 85px;
width: 85px;
border-radius: 50%;
${({ styles }) => `${styles}`};
`;
