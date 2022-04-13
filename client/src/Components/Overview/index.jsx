/* eslint-disable react/jsx-wrap-multilines */
import React, {
  useState, useContext, useEffect, useCallback,
} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Styles from './Styles';
import ProductOverview from './ProductOverview';
import ProductGallery from './ProductGallery';
import LogoCart from './LogoCart';
import Selection from './Selection';
import RenderRating from '../renderRating';
import Socials from './Socials';
import currentProducts from '../../Contexts/CurProdContext';
import currentStyle from '../../Contexts/CurStyleContext';
import {
  Header, SpaceII, Space, Product, Left, Right, ReviewSumm, Bottom,
  POverview, Social, Price, OnSale, Og, Sale, Stylesdesc, Reviews,
  MoreContainer, StyleContainer, SelectionContainer,
} from './StyledComps/indexStyle';

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
      .catch((err) => new Error(err));
  }

  const getCartCB = useCallback(() => getCart(), []);

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
        <LogoCart cart={cart} getCart={getCartCB} />
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
                  {currentProd.category
                    && currentProd.category.toUpperCase()}
                </b>
              </i>
            </div>
            <h2>{currentProd.name && currentProd.name}</h2>
            <ReviewSumm>
              <RenderRating prodID={currentProd.id && currentProd.id} />
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
                {styles && styles.map((style) => <Styles
                  key={style.style_id}
                  style={style}
                  setCurStyle={setCurStyle}
                />)}
              </StyleContainer>
              <SelectionContainer>
                <Selection getCart={getCartCB} />
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

Overview.propTypes = {
  styles: PropTypes.arrayOf(PropTypes.curStyle).isRequired,
  setCurStyle: PropTypes.func.isRequired,
};
export default Overview;
