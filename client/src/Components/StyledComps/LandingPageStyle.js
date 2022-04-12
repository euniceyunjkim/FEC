import styled from 'styled-components';

export const Page = styled.div`
background-color: black;
`;

export const BgContainer = styled.div`
display: flex;
justify-content: center;
`;

export const Background = styled.div`
height: 1050px;
width: 1680px;
display: grid;
grid-template: 1fr/ 1fr;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
background-size: contain;
position: relative;
place-items: center;
margin: auto;
`;

export const AnimLogo = styled.div`
z-index: 1;
position: absolute;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
background-size: contain;
width: 75%;
height: 75%;
`;

export const Joestar = styled.button`
z-index: 2;
position: absolute;
top: 70%;
left: 42.25%;
color: black;
border: 1px solid;
background-color: transparent;
font-align: center;
font-size: 20px;
padding:10px 21px;
margin: 0 auto;
font-weight: bold;
font-family: 'Amatic SC', cursive;
font-family: 'Space Mono', monospace;

&:hover {
  cursor: pointer;
  background-color: #4b15a3;
  color: white;
};
`;

export const Ready = styled.button`
z-index: 2;
position: absolute;
top: 70%;
left: 47%;
color: black;
border: 1px solid;
background-color: transparent;
font-align: center;
font-size: 20px;
padding:10px 21px;
margin: 0 auto;
font-weight: bold;
font-family: 'Amatic SC', cursive;
font-family: 'Space Mono', monospace;

&:hover {
  cursor: pointer;
  background-color: #4b15a3;
  color: white;
};
`;
