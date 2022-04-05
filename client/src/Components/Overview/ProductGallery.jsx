import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import currentStyle from '../../Contexts/CurStyleContext.js';

const Carouselcontainer = styled.div`
  width: 100%;
  display: flex;
  flexDirection: column;
`
const Carouselwrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
`
const Carouselcontwrap = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
`
const Carouselconten = styled.div`
  display: flex;
`

function ProductGallery({ }) {
  const [photos, setPhotos] = useState([]);
  const { curStyle } = useContext(currentStyle);

  useEffect(() => {
    if (curStyle.style_id) {
      setPhotos(curStyle.photos);
    }
  }, [curStyle]);

  return (
    <Carouselcontainer>
      <Carouselwrapper>
        <Carouselcontwrap>
          <Carouselconten>
            <div style={{ maxWidth: 1200, marginLeft: 'auto' }}>
              {/* {console.log(photos)} */}
              {photos.map((photo) => <img key={photo.url} alt="" src={photo.url} />)}
            </div>
          </Carouselconten>
        </Carouselcontwrap>
      </Carouselwrapper>
    </Carouselcontainer>
  );
}

export default ProductGallery;
