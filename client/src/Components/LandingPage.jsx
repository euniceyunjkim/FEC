import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Page = styled.div`
background-color: black;
`;
const BgContainer = styled.div`
display: flex;
justify-content: center;
`;

const Background = styled.div`
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

const AnimLogo = styled.div`
z-index: 1;
position: absolute;
background-image: ${({ src }) => `url(${src})`};
background-repeat: no-repeat;
background-size: contain;
width: 75%;
height: 75%;
`;

const Joestar = styled.button`
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

const Ready = styled.button`
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

let LandingPage = ({ }) => {
  let navigate = useNavigate();
  const [clicked, setClick] = useState(false);

  function playMusic() {
    setClick(true);
    const audio = document.getElementById("bgmusic");
    audio.play();
  }

  return (
    <Page>
      <BgContainer>
        <Background src="overview_imgs/Jojoland.jpeg">
          <AnimLogo src="overview_imgs/AnimLogo.gif" />
          {clicked ? <Joestar onClick={() => { navigate("/40346") }}>START YOUR ADVENTURE
          </Joestar> : <Ready onClick={playMusic}>READY?</Ready>}
          <audio id="bgmusic" src='overview_imgs/audio.mp3' type="audio/mp3" />
        </Background>
      </BgContainer>
    </Page>
  )
}

export default LandingPage;
