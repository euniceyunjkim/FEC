import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Styles from './Styles.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductGallery from './ProductGallery.jsx';
import LogoCart from './LogoCart.jsx';
import Selection from './Selection.jsx';

import Socials from './Socials.jsx';
import currentProducts from '../../Contexts/CurProdContext.js';

import styled from 'styled-components';

const StyleContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 300px;
height: 150px;
`
const Header = styled.div`
width: 100%;
height: 90px;
background-color: #4b15a3;
text-align: center;
`
const SpaceII = styled.div`
 width:100%;
 height: 10px;
 background-color: #280f54
`
const Space = styled.div`
 width:100%;
 height: 10px;
 background-color: #ffffff
`
const Product = styled.div`
padding-top: 100px;
`

function Overview({styles, setCurStyle}) {
  const { currentProd } = useContext(currentProducts);

  return (
      <div id="overview">
        <Header><LogoCart /></Header>
        <Space />
        <SpaceII />
        <Product>
          <div id="product details">
            <div id="review-summ">Review Summary</div>
            <div id="product-category">
              <b>Category:&nbsp;</b>
              {currentProd.category}
            </div>
            <h3>{currentProd.name}</h3>
            <div><ProductGallery /></div>
            <div>Styles > Selected Style</div>
            <br />
            <StyleContainer>
              {styles.map((style) => <Styles key={style.style_id} style={style} setCurStyle={setCurStyle}/>)}
            </StyleContainer>
            <Selection />
          </div>
        </Product>
        <div id="product-overview"><ProductOverview /></div>
        <br />
        <div id="share-socials"><Socials /></div>
      </div>
  );
}

export default Overview;
