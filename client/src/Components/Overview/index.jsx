import React, { useState, useContext, useEffect, useRef } from 'react';
import Reviewss from '../Reviews/index.jsx';

import axios from 'axios';
import Styles from './Styles.jsx';
import ProductOverview from './ProductOverview.jsx';
import ProductGallery from './ProductGallery.jsx';
import ThumbnailCarousel from './ThumbnailCarousel.jsx';
import LogoCart from './LogoCart.jsx';
import Selection from './Selection.jsx';
import RenderRating from '../renderRating.jsx';

import Socials from './Socials.jsx';
import currentProducts from '../../Contexts/CurProdContext.js';
import currentStyle from '../../Contexts/CurStyleContext.js';

import styled from 'styled-components';
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
padding-top: 70px;
display: flex;
justify-content: space-evenly;
height: 90%;
width: 100%;
`
const Left = styled.div`
width: auto;
height: auto;
order: 1;
`
const Right = styled.div`
width: auto;
height: auto%;
order: 2;
`
const ReviewSumm = styled.div`
display: flex;
padding-bottom: 10px;
`
const GalleryContainer = styled.div`
display: flex;
`
const ThumbnailContainer = styled.div`
flex: 15%;
height: 100%;
padding-right: 15px;
`
const ProductGalleryContainer = styled.div`
flex: 85%;
height: 100%;
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
const Price = styled.div`
padding: 15px 0px;
display: flex;
`
const OnSale = styled.div`
color: black;
font-size: 20px;
text-decoration: line-through;
float: left;
order: 1;
padding-right: 10px;
`

const Og = styled.div`
color: black;
font-size: 20px;
order: 1;
`

const Sale = styled.div`
color: red;
font-size: 20px;
float: left;
order: 2;
`
const Stylesdesc = styled.div`
padding-top: 10px;
padding-bottom: 10px;
`
const Reviews = styled.div`
text-decoration: underline;
padding-left: 10px;
&:hover {
  cursor: pointer;
  color: #280f54;
}
`

const MoreContainer = styled.div`
display: grid;
grid-template: 1fr/1fr;
place-items: center;
`;

const StyleContainer = styled.div`
z-index: 1;
display: grid;
grid-template-columns: repeat(4, 1fr);
width: 500px;
height: 250px;
padding-bottom: 20px;
padding-top: 30px;
`

const SelectionContainer = styled.div`
z-index: 2;
`;
function Overview({ styles, setCurStyle, ReviewsRef }) {
  const { currentProd } = useContext(currentProducts);
  const { curStyle } = useContext(currentStyle);
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState([]);

  function autoScroll(){
    document.getElementById('ReviewsRef').scrollIntoView({behavior: "auto"});
  }

  function getCart() {
    axios.get('/cart')
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
  }


  return (
    <div id="overview">
      <Header>
        <LogoCart cart={cart} setCart={setCart} getCart={getCart}/>
      </Header>
      <Space />
      <SpaceII />
      <Product>
        <Left>
          <GalleryContainer>
            <ThumbnailContainer>
            <ThumbnailCarousel index={index} setIndex={setIndex} />
            </ThumbnailContainer>
            <ProductGalleryContainer>
            <ProductGallery index={index} setIndex={setIndex}/>
            </ProductGalleryContainer>
          </GalleryContainer>
        </Left>
        <Right>
          <div id="product details">
            <div id="product-category">
              <i><b>CATEGORY&nbsp;//&nbsp;</b>
              {currentProd.category && currentProd.category.toUpperCase()}</i>
            </div>
            <h2>{currentProd.name}</h2>
            <ReviewSumm>
              <RenderRating prodID={currentProd.id} />
              <Reviews onClick={() => autoScroll()}><i>Read All Reviews</i></Reviews>
            </ReviewSumm>
            <Price>
              {curStyle.sale_price ? <div><OnSale>${curStyle.original_price}</OnSale><Sale>${curStyle.sale_price}</Sale></div> : <Og>${curStyle.original_price}</Og>}
            </Price>
            <Stylesdesc> Selected Style >&nbsp;
              <b>{curStyle.name}</b>
            </Stylesdesc>
            <MoreContainer>
            <StyleContainer>
              {styles.map((style) => <Styles key={style.style_id} style={style} setCurStyle={setCurStyle} />)}
            </StyleContainer>
            <SelectionContainer>
            <Selection getCart={getCart}/>
            </SelectionContainer>
            </MoreContainer>
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
