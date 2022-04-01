import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function ProductGallery({ photos, setPhotos }) {
  return (
    <div>
      {photos.map((photo) => <img alt="" src={photo.thumbnail_url}/>)}
    </div>
  );
}

export default ProductGallery;
