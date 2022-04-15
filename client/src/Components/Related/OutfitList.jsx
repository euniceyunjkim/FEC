import React, { useState, useEffect, useContext } from 'react';
import Card from './StyledComps/CardStyle';
import { List, SmolList } from './StyledComps/ListStyle';
import currentProducts from '../../Contexts/CurProdContext';
import currentStyle from '../../Contexts/CurStyleContext';
import { PreviousIcon, NextIcon } from './StyledComps/CarouselButtonStyle';

const AxiosHelper = require('./AxiosHelper');

function OutfitList() {
  const [outfits, setOutfits] = useState({});
  const { currentProd } = useContext(currentProducts);
  const { curStyle } = useContext(currentStyle);
  const [current, setCurrent] = useState(0);
  const { length } = Object.keys(outfits);

  const getAllOutfits = () => {
    AxiosHelper.getOutfits()
      .then((data) => setOutfits(data.data))
      .catch((err) => new Error(err));
  };

  const addOutfit = () => {
    AxiosHelper.postOutfit([`${currentProd.id}${curStyle.style_id}`, currentProd, curStyle])
      .then(() => getAllOutfits())
      .catch((err) => new Error(err));
  };

  const removeOutfit = (id) => {
    AxiosHelper.removeOutfit(id)
      .then(() => getAllOutfits())
      .catch((err) => new Error(err));
  };

  useEffect(() => {
    getAllOutfits();
  }, []);

  const next = () => {
    setCurrent(current + 1);
  };

  const previous = () => {
    setCurrent(current - 1);
  };

  return (
    <List>
      <PreviousIcon className={current === 0 ? 'hidden' : ''} src="overview_imgs/DarkLArrow.webp" onClick={current === 0 ? null : previous} />
      <SmolList>
        <Card newOutfit="newOutfit" addOutfit={addOutfit} />
        {Object.keys(outfits).map((key, index) => {
          if (index < current + 3 && index > current - 1) {
            return (
              <Card
                key={key}
                action="Remove"
                handleClick={removeOutfit}
                id={key}
                product={outfits[key][0]}
                styles={outfits[key][1]}
                image="assets/DeleteButton.webp"
              />
            );
          }
          return null;
        })}
      </SmolList>
      <NextIcon className={current < length - 3 ? '' : 'hidden'} src="overview_imgs/DarkRArrow.webp" onClick={current < length - 3 ? next : null} />
    </List>
  );
}

export default OutfitList;
