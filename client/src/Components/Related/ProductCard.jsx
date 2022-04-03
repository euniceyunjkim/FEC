import React from 'react';
import { CardImage } from './StyledComps/ImageStyle.js';
import { ButtonIcon } from './StyledComps/ButtonStyle.js';
import { Category } from './StyledComps/CategoryStyle.js';
import { Price } from './StyledComps/PriceStyle.js';
import { ProdName } from './StyledComps/NameStyle.js';

let ProductCard = ({className, product, styles, newOutfit}) => {

  let router = () => {
    if (newOutfit === 'newOutfit') {
      return (
        <div className={className}>
          <CardImage src={'Images/PurpleStar.png'} />
          <div>Click to add this item to your outfit!</div>
        </div>
      )
    } else if (styles) {
      return (
        <div className={className}>
          <CardImage src={styles.photos[0].thumbnail_url || 'Images/PurpleStar.png'} />
          <ButtonIcon>Compare</ButtonIcon>
          <Category><i>{product.category}</i></Category>
          <ProdName>{styles.name} {product.name}</ProdName>
          <Price>{styles.original_price}</Price>
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