import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Styles from './Styles.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductGallery from './ProductGallery.jsx';

import Socials from './Socials.jsx';
import currentProducts from '../../Contexts/CurProdContext.js';
import styled from 'styled-components';

const StyleContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 300px;
height: 150px;
`

function Overview() {
  const { currentProd } = useContext(currentProducts);
  const [styles, setStyles] = useState([]);
  const [photos, setPhotos] = useState([]);

  let id = currentProd.id;

  function getStyles() {
    // console.log(id);
    axios.get('products/:product_id/styles', { params: { product_id: id } })
      .then((res) => setStyles(res.data.results))
      // console.log(res.data))
      // eslint-disable-next-line no-console
      .catch((err) => console.error('err fetching styles', err));
  }

  // const [loaded, setLoad] = useState(false);

  useEffect(() => {
    getStyles();
  }, [currentProd]);

  return (
    <div id="overview">
      <div>Logo And Search Bar</div>
      <div id="product">
        <div id="product details">
          <div id="review-summ">Review Summary</div>
          <div id="product-category">
            Category:&nbsp;
            {currentProd.category}
          </div>
          <h3>{currentProd.name}</h3>
          <div><ProductGallery setPhotos={setPhotos} photos={photos}/></div>
          <div>Styles > Selected Style</div>
          <br/>
          <StyleContainer>
          {styles.map((style) => <Styles key={style.style_id} style={style} />)}
          </StyleContainer>
        </div>
      </div>
      <div id="product-overview"><ProductOverview /></div>
      <br />
      <div id="share-socials"><Socials /></div>
    </div>
  );
}

export default Overview;
