import React, { useContext } from 'react';
import { CardImage, CardImageContainer } from './StyledComps/ImageStyle.js';
import { ButtonIcon } from './StyledComps/ButtonStyle.js';
import { Category } from './StyledComps/CategoryStyle.js';
import { Price } from './StyledComps/PriceStyle.js';
import { ProdName } from './StyledComps/NameStyle.js';
import { SalePrice } from './StyledComps/SalePriceStyle.js';
import Modal from './Modal.jsx';
import RenderRating from '../renderRating.jsx';
import currentProducts from '../../Contexts/CurProdContext.js';
import { useNavigate } from 'react-router-dom';

let ProductCard = ({className, product, styles, newOutfit, action, addOutfit, id, handleClick, showModal, setShowModal, compareData}) => {
  let navigate = useNavigate();

  const {setCurrentProd} = useContext(currentProducts);

  let router = () => {
    if (newOutfit === 'newOutfit') {
      return (
        <div className={className} onClick={() => addOutfit()}>
          <CardImage src={'assets/PurpleStar.png'} />
          <div>Click to add this item to your outfit!</div>
        </div>
      )
    } else if (styles) {
      return (
        <div className={className}>
          <CardImageContainer>
            <CardImage src={styles.photos[0].thumbnail_url || 'assets/NoImage.png'} onClick={() => {navigate(`/${product.id}`)}}/>
            <ButtonIcon src ={"assets/PurpleX.png"} onClick={() => handleClick(id)}></ButtonIcon>
          </CardImageContainer>
          {showModal ? <Modal styles={styles} product={product} showModal={showModal} setShowModal={setShowModal} compareData={compareData}></Modal> : null}
          <Category><i>{product.category}</i></Category>
          <ProdName>{styles.name} {product.name}</ProdName>
          <Price><SalePrice>{styles.sale_price}</SalePrice>  ${styles.original_price}</Price>
          <RenderRating prodID={product.id} />
        </div>
      )
    }
  }

  return (
    <>
    {router()}
    </>
  )


}

export default ProductCard;