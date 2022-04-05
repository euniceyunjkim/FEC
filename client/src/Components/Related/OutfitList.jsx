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
    setCurrent(current === length - 2 ? 0 : current + 1);
  };

  let previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }


  return (
    <List>
      {current === 0 ? null : <PreviousIcon src="assets/PurpleX.png" onClick={previous} />}
      <Card newOutfit={'newOutfit'} addOutfit={addOutfit} />
    {Object.keys(outfits).map((key, index) => {
      if (index < current + 2 && index > current - 1) {
        return <Card key={index} action={'Remove'} handleClick={removeOutfit} id={key} product={outfits[key][0]} styles={outfits[key][1]}/>
      }
    })}
      {current < length - 2 ? <NextIcon src="assets/RedX.png" onClick={next} /> : null}
    </List>
  )

}

export default OutfitList;