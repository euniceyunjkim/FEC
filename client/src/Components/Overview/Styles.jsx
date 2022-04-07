import React from 'react';
import styled from 'styled-components';

const StylesContainer = styled.div`
width: 100%;
height: 112px;
`;

const StyleIcon = styled.div`
width:70px;
height:70px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-repeat: no-repeat;
background-position: center;
justify-content: center;
&:hover {
  cursor: pointer;
}
`;

function Styles({ style, setCurStyle }) {
  function handleClick(item) {
    setCurStyle(item);
  }

  return (
      <StylesContainer>
        <StyleIcon src={style.photos[0].thumbnail_url} onClick={() => handleClick(style)} />
      </StylesContainer>
  );
}

export default Styles;
