import React from 'react';
import { CardImage } from './StyledComps/ImageStyle.js';
import { ButtonIcon } from './StyledComps/ButtonStyle.js';

let ProductCard = ({className, product, styles}) => {

  let router = () => {
    if (styles) {
      return (
        <div className={className}>
          <CardImage src={styles.photos[0].thumbnail_url} />
          <ButtonIcon>Hi</ButtonIcon>
          <div>{product.category}</div>
          <div>{styles.name} {product.name}</div>
          <div>{styles.original_price}</div>
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