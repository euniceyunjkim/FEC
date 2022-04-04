import React from 'react';
import { CardImage } from './StyledComps/ImageStyle.js';
import { ButtonIcon } from './StyledComps/ButtonStyle.js';
import { Category } from './StyledComps/CategoryStyle.js';
import { Price } from './StyledComps/PriceStyle.js';
import { ProdName } from './StyledComps/NameStyle.js';
import { SalePrice } from './StyledComps/SalePriceStyle.js';
import Modal from './Modal.jsx';

let ProductCard = ({className, product, styles, newOutfit, action, addOutfit, id, handleClick, showModal, setShowModal, compareData}) => {


  let router = () => {
    if (newOutfit === 'newOutfit') {
      return (
        <div className={className} onClick={() => addOutfit()}>
          <CardImage src={'Images/PurpleStar.png'} />
          <div>Click to add this item to your outfit!</div>
        </div>
      )
    } else if (styles) {
      return (
        <div className={className}>
          <CardImage src={styles.photos[0].thumbnail_url || 'Images/PurpleStar.png'} />
          <ButtonIcon onClick={() => handleClick(id)}>{action}</ButtonIcon>

          <Category><i>{product.category}</i></Category>
          <ProdName>{styles.name} {product.name}</ProdName>
          <Price><SalePrice>{styles.sale_price}</SalePrice>  ${styles.original_price}</Price>
        </div>
      )
    }
  }

  return (
    <>
    {router()}
    {compareData ? <Modal showModal={showModal} setShowModal={setShowModal} compareData={compareData}></Modal> : null}
    </>
  )


}

export default ProductCard;