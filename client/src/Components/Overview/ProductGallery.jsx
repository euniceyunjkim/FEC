import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import EModal from './EModal';
import ThumbnailCarousel from './ThumbnailCarousel';
import {
  Carouselcontainer, Carouselinner, ThumbnailContainer, InnerLeft, InnerRight, InnerCenter, Expand,
} from './StyledComps/ProductGalleryStyle';

function ProductGallery({ index, setIndex, photos }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow((prev) => !prev);
  }

  const toggleShowCB = useCallback(() => toggleShow(), []);

  function flipper(num) {
    if (num > 0) {
      if (index < (photos.length - 1)) {
        setIndex(index + num);
      } else if (index === (photos.length - 1)) {
        setIndex(photos.length - 1);
      }
    } else if (num < 0) {
      if (index > 0) {
        setIndex(index + num);
      } else if (index === 0) {
        setIndex(0);
      }
    }
  }

  const flipperCB = useCallback((num) => flipper(num), []);

  const styles = {
    show: 'background-color: rgb(75,21,163,0.6); border-radius: 60%; cursor: pointer;',
  };

  return (
    <Carouselcontainer>
      <ThumbnailContainer>
        <ThumbnailCarousel index={index} setIndex={setIndex} photos={photos} />
      </ThumbnailContainer>
      {photos.length > 0 && (
        <Carouselinner src={photos[index].url ? photos[index].url : 'assets/NoImage.webp'}>
          <InnerLeft onClick={() => flipper(-1)} styles={index === 0 ? null : styles.show}>
            {index === 0 ? null : <img alt="" src="overview_imgs/LightLArrow.webp" />}
          </InnerLeft>
          <InnerCenter />
          <InnerRight
            onClick={() => flipper(1)}
            styles={index === photos.length - 1 ? null : styles.show}
          >
            {index === photos.length - 1 ? null : <img alt="" src="overview_imgs/LightRArrow.webp" />}
          </InnerRight>
          <Expand
            onClick={() => toggleShow()}
          />
          <EModal expand={photos[index].url ? photos[index].url : 'assets/NoImage.webp'} show={show} hideModal={toggleShowCB} photos={photos} flipper={flipperCB} index={index} setIndex={setIndex} />
        </Carouselinner>
      )}
    </Carouselcontainer>
  );
}

ProductGallery.propTypes = {
  index: PropTypes.number.isRequired,
  setIndex: PropTypes.func.isRequired,
  photos: PropTypes.arrayOf.isRequired,
};

export default ProductGallery;
