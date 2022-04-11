import React from 'react';
import styled from 'styled-components';

const Facebook = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

const Twitter = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

const Pinterest = styled.div`
width:20px;
height:20px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-size: contain;
background-repeat: no-repeat;
background-position: center;
`;

const SocialContainer = styled.div`
display:flex;
justify-content: space-evenly;
width: 200px;
padding-bottom: 15px;
padding-top: 15px;
`;

function Socials() {
  return (
    <div>
      {/* <i>Share on your socials!&nbsp;</i> */}
      <SocialContainer>
        <Facebook src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png" />
        <Twitter src="https://diamondfountainmedia.com/wp-content/uploads/2021/06/Twitter-logo.png" />
        <Pinterest src="https://uxwing.com/wp-content/themes/uxwing/download/10-brands-and-social-media/pinterest-round-line-color.png" />
      </SocialContainer>
    </div>
  );
}

export default Socials;
