import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import Styles from './Styles.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductGallery from './ProductGallery.jsx';
import LogoCart from './LogoCart.jsx';
import Selection from './Selection.jsx';
import RenderRating from '../renderRating.jsx';

import Socials from './Socials.jsx';
import currentProducts from '../../Contexts/CurProdContext.js';
import currentStyle from '../../Contexts/CurStyleContext.js';

import styled from 'styled-components';

const StyleContainer = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 600px;
height: 250px;
padding-bottom: 50px;
padding-top: 50px;
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
display: flex;
justify-content: space-evenly;
width: 90%;
`
const Left = styled.div`
width: auto;
`

const Right = styled.div`
width: auto;
`
const ReviewSumm = styled.div`
padding-bottom: 20px;
justify-content: left;
`

const Bottom = styled.div`
width: 90%
padding-top: 100px;
padding-bottom: 100px;
text-align: center;
display: grid;
gird-template: 1fr/ 1fr;
place-items: center;
`
const POverview = styled.div`
z-index: 2;
`
const Social = styled.div`
padding-top: 25px;
z-index: 1;
`

function Overview({ styles, setCurStyle }) {
  const { currentProd } = useContext(currentProducts);
  const { curStyle } = useContext(currentStyle);

  return (
    <div id="overview">
      <Header><LogoCart /></Header>
      <Space />
      <SpaceII />
      <Product>
        <Left>
          <div>
            <ProductGallery />
          </div>
        </Left>
        <Right>
          <div id="product details">
            <div id="product-category">
              <b>Category:&nbsp;</b>
              {currentProd.category}
            </div>
            <h3>{currentProd.name}</h3>
            <ReviewSumm>
              <RenderRating prodID={currentProd.id} />
            </ReviewSumm>
            <div>Styles > Selected Style >&nbsp;
              <b>{curStyle.name}</b>
            </div>
            <StyleContainer>
              {styles.map((style) => <Styles key={style.style_id} style={style} setCurStyle={setCurStyle} />)}
            </StyleContainer>
            <Selection />
          </div>
        </Right>
      </Product>
      <br/>
      <Bottom>
        <POverview>
          <ProductOverview />
        </POverview>
        <br/>
        <Social>
          <Socials />
        </Social>
      </Bottom>
    </div >
  );
}

export default Overview;
