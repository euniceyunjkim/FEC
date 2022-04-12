import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard.jsx';
import { Card } from './StyledComps/CardStyle.js';
import { List } from './StyledComps/ListStyle.js';
import currentProducts from '../../Contexts/CurProdContext.js';
import currentStyle from '../../Contexts/CurStyleContext.js';
import { PreviousIcon, NextIcon } from './StyledComps/CarouselButtonStyle.js';
const AxiosHelper = require('./AxiosHelper');


let OutfitList = ({}) => {

  let [outfits, setOutfits] = useState({});
  const {currentProd} = useContext(currentProducts);
  const {curStyle} = useContext(currentStyle);
  let [current, setCurrent] = useState(0);
  var length = Object.keys(outfits).length;

  let getAllOutfits = () => {
    AxiosHelper.getOutfits()
    .then((data) => setOutfits(data.data))
    .catch((err) => console.log(err))
  }

  let addOutfit = () => {
    AxiosHelper.postOutfit([`${currentProd.id}${curStyle.style_id}`, currentProd, curStyle])
    .then(() => getAllOutfits())
    .catch((err) => console.log(err));
  }

  let removeOutfit = (id) => {
    AxiosHelper.removeOutfit(id)
    .then(() => getAllOutfits())
    .catch((err) => console.log(err));
  }

  useEffect(() => {
    getAllOutfits();
  }, [])

  let next = () => {
    setCurrent(previous => previous + 1);
  };

  let previous = () => {
    setCurrent(previous => previous - 1);
  }

  return (
    <List>
      {<PreviousIcon className={current === 0 ? "hidden" : ""} src="overview_imgs/DarkLArrow.webp" onClick={current === 0 ? null : previous} />}
      <Card newOutfit={'newOutfit'} addOutfit={addOutfit} />
    {Object.keys(outfits).map((key, index) => {
      if (index < current + 3 && index > current - 1) {
        return <Card key={index} action={'Remove'} handleClick={removeOutfit} id={key}
        product={outfits[key][0]} styles={outfits[key][1]} image={"assets/DeleteButton.webp"}/>
      }
    })}
      {<NextIcon className={current >= length - 3 ? "hidden" : ""} src={"overview_imgs/DarkRArrow.webp"} onClick={current < length - 3 ? next : null} />}
    </List>
  )

}

export default OutfitList;