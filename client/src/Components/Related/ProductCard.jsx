import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { CardImage, CardImageContainer } from './StyledComps/ImageStyle';
import { CardButtonIcon } from './StyledComps/ButtonStyle';
import Category from './StyledComps/CategoryStyle';
import Price from './StyledComps/PriceStyle';
import ProdName from './StyledComps/NameStyle';
import SalePrice from './StyledComps/SalePriceStyle';
import Modal from './Modal';
import RenderRating from '../renderRating';

function ProductCard({
  className, product, styles, newOutfit, image,
  action, addOutfit, id, handleClick, showModal, setShowModal, compareData,
}) {
  const navigate = useNavigate();

  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };

  const router = () => {
    if (newOutfit === 'newOutfit') {
      return (
        <div aria-hidden="true" className={className} onClick={() => addOutfit()} onKeyDown={() => {}}>
          <CardImage src="assets/PurpleStar.webp" />
          <ProdName>Click to add this item to your outfit!</ProdName>
        </div>
      );
    }
    if (styles) {
      return (
        <div className={className}>
          <CardImageContainer>
            <CardImage src={styles.photos[0].thumbnail_url || 'assets/NoImage.webp'} onClick={() => { navigate(`/${product.id}`); }} />
            <CardButtonIcon
              src={image}
              className={hovered ? action : ''}
              onClick={() => handleClick(id)}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            />
          </CardImageContainer>
          {showModal
            ? (
              <Modal
                styles={styles}
                product={product}
                showModal={showModal}
                setShowModal={setShowModal}
                compareData={compareData}
              />
            )
            : null}
          <Category><i>{product.category}</i></Category>
          <ProdName>
            {styles.name}
            {product.name}
          </ProdName>
          <Price>
            <SalePrice>{styles.sale_price}</SalePrice>
            $
            {styles.original_price}
          </Price>
          <RenderRating prodID={product.id} />
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {router()}
    </>
  );
}

ProductCard.propTypes = {
  className: PropTypes.arrayOf.isRequired,
  product: PropTypes.objectOf.isRequired,
  styles: PropTypes.objectOf.isRequired,
  newOutfit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired,
  addOutfit: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
  showModal: PropTypes.bool.isRequired,
  setShowModal: PropTypes.func.isRequired,
  compareData: PropTypes.func.isRequired,
};
export default ProductCard;
