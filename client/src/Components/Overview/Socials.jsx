import React from 'react';
import {
  Facebook, Twitter, Pinterest, SocialContainer,
} from './StyledComps/SocialsStyle.js';

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
