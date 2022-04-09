import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

const StylesContainer = styled.div`
width: auto%;
height: auto;
`;

const StyleIcon = styled.div`
width:70px;
height:70px;
background-image: ${({ src }) => `url(${src})`};
border-radius: 50%;
background-position: center;
background-size: cover;
&:hover {
  cursor: pointer;
}
`;

const Checkmark = styled.div`
width: 25px;
height: 25px;
background-repeat: no-repeat;
background-size: contain;
position: absolute;
${({ styled }) => `${styled}`};
`;

function Styles({ style, setCurStyle }) {
  const [selected, setSelect] = useState(0);
  const { curStyle } = useContext(currentStyle);

  const styled = {
    selected: 'background-image: url("overview_imgs/PCheckmark.png");',
  };

  function handleClick(item) {
    setCurStyle(item);
    setSelect(item.style_id);
  }

  useEffect(() => {
    if (curStyle.style_id) {
      setSelect(curStyle.style_id);
    }
  }, [curStyle]);

  return (
    <StylesContainer>
      <Checkmark styled={selected === style.style_id ? styled.selected : null} />
      <StyleIcon src={style.photos[0].thumbnail_url ? style.photos[0].thumbnail_url : 'assets/NoImage.png'} onClick={() => handleClick(style)} />
    </StylesContainer>
  );
}

export default Styles;
