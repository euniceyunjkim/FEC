import React from 'react';
import styled from 'styled-components';

const StylesContainer = styled.div`

`;

const StyleName = styled.div`
padding-top: 10px;
visibility: hidden;
font-size: 15px;
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
    <div>
      <StylesContainer>
        <StyleIcon src={style.photos[0].thumbnail_url} onClick={() => handleClick(style)} />
      </StylesContainer>
    </div>
  );
}

export default Styles;
