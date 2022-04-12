/* eslint-disable react/jsx-wrap-multilines */
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
import {
  Header, SpaceII, Space, Product, Left, Right, ReviewSumm, Bottom,
  POverview, Social, Price, OnSale, Og, Sale, Stylesdesc, Reviews,
  MoreContainer, StyleContainer, SelectionContainer,
} from './StyledComps/indexStyle.js';

function Overview({ styles, setCurStyle }) {
  const [photos, setPhotos] = useState([]);
  const { currentProd } = useContext(currentProducts);
  const { curStyle } = useContext(currentStyle);
  const [index, setIndex] = useState(0);
  const [cart, setCart] = useState([]);

  function autoScroll() {
    document.getElementById('ReviewsRef').scrollIntoView({ behavior: 'auto' });
  }

  function getCart() {
    axios.get('/cart')
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    if (curStyle.photos) {
      setPhotos(curStyle.photos);
    }
  }, [curStyle]);

  useEffect(() => {
    if (curStyle.photos) {
      setIndex(0);
    }
  }, [currentProd.id]);

  useEffect(() => {
    if (curStyle.photos) {
      setPhotos(curStyle.photos);
      setIndex(0);
    }
  }, []);

  return (
    <div id="overview">
      <Header>
        <LogoCart cart={cart} getCart={getCart} />
      </Header>
      <Space />
      <SpaceII />
      <Product>
        <Left>
          <ProductGallery index={index} setIndex={setIndex} photos={photos} />
        </Left>
        <Right>
          <div id="product details">
            <div id="product-category">
              <i>
                CATEGORY&nbsp;//&nbsp;
                <b>
                  {currentProd.category &&
                    currentProd.category.toUpperCase()}
                </b>
              </i>
            </div>
            <h2>{currentProd.name}</h2>
            <ReviewSumm>
              <RenderRating prodID={currentProd.id} />
              <Reviews onClick={() => autoScroll()}><i>READ ALL REVIEWS</i></Reviews>
            </ReviewSumm>
            <Price>
              {curStyle.sale_price
                ? (
                  <div>
                    <OnSale>
                      $
                      {curStyle.original_price}
                    </OnSale>
                    <Sale>
                      $
                      {curStyle.sale_price}
                    </Sale>
                  </div>
                ) : (
                  <Og>
                    $
                    {curStyle.original_price}
                  </Og>)}
            </Price>
            <Stylesdesc>
              <i>
                SELECTED STYLE
              </i>
              &nbsp;//&nbsp;
              <b><i>{curStyle.name && curStyle.name.toUpperCase()}</i></b>
            </Stylesdesc>
            <MoreContainer>
              <StyleContainer>
                {styles.map((style) => <Styles
                  key={style.style_id}
                  style={style}
                  setCurStyle={setCurStyle}
                />)}
              </StyleContainer>
              <SelectionContainer>
                <Selection getCart={getCart} />
              </SelectionContainer>
            </MoreContainer>
          </div>
        </Right>
      </Product>
      <br />
      <Bottom>
        <POverview>
          <ProductOverview />
        </POverview>
        <br />
        <Social>
          <Socials />
        </Social>
      </Bottom>
    </div>
  );
}

export default Overview;
