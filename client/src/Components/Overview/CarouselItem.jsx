import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

function CarouselItem({photo, width}) {
  return (
    <div style={{ width: width }}>
      <img alt="" src={photo.thumbnail_url} />
    </div>
  );
}

export default CarouselItem;
