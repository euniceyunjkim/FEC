import React, { useState } from 'react';
import styled from 'styled-components';

const StyleIcon = styled.div`
width:50px;
height:50px;
background-image: ${({src}) => `url(${src})`};
border-radius: 50%;
background-repeat: no-repeat;
background-position: center;
text-align: center;
`;

function Styles({ style }) {
  const [photos, setPhotos] = useState([]);

  function handleClick(item) {
    setPhotos(item);
  }

  return (
    <div>
      {console.log(style)}
      <StyleIcon src={style.photos[0].thumbnail_url} onClick={() =>handleClick(style)} />
    </div>
  );
}

export default Styles;
