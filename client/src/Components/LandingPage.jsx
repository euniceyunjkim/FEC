import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Page, BgContainer, Background, AnimLogo,
  Joestar, Ready,
} from './StyledComps/LandingPageStyle';

function LandingPage() {
  const navigate = useNavigate();
  const [clicked, setClick] = useState(false);

  function playMusic() {
    setClick(true);
    const audio = document.getElementById('bgmusic');
    audio.play();
  }

  const playMusicCB = useCallback(() => playMusic(), []);

  return (
    <Page>
      <BgContainer>
        <Background src="overview_imgs/Jojoland.jpeg">
          <AnimLogo src="overview_imgs/AnimLogo.gif" />
          {clicked ? (
            <Joestar onClick={() => { navigate('/40346'); }}>
              START YOUR ADVENTURE
            </Joestar>
          ) : (
            <Ready onClick={playMusicCB}>
              READY?
            </Ready>
          )}
          <audio
            id="bgmusic"
            src="overview_imgs/audio.mp3"
            type="audio/mp3"
          >
            <track kind="captions" />
          </audio>
        </Background>
      </BgContainer>
    </Page>
  );
}

export default LandingPage;
