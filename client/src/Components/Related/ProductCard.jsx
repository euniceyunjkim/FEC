import React, {useContext} from 'react';
import { CardImage } from './StyledComps/ImageStyle.js';
import { ButtonIcon } from './StyledComps/ButtonStyle.js';
import { Category } from './StyledComps/CategoryStyle.js';
import { Price } from './StyledComps/PriceStyle.js';
import { ProdName } from './StyledComps/NameStyle.js';
import currentProducts from '../../Contexts/CurProdContext.js';
import currentStyle from '../../Contexts/CurStyleContext.js';
const AxiosHelper = require('./AxiosHelper');

let ProductCard = ({className, product, styles, newOutfit, action, setOutfits}) => {

  const {currentProd} = useContext(currentProducts);
  const {curStyle} = useContext(currentStyle);

  let addOutfit = () => {
    AxiosHelper.postOutfit([`${currentProd.id}${curStyle.style_id}`, currentProd, curStyle])
    .then(() => AxiosHelper.getOutfits())
    .then((data) => setOutfits(data.data))
    .catch((err) => console.log(err));
  }

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
          <ButtonIcon>{action || 'Compare'}</ButtonIcon>
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