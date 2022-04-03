import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard.jsx';
import { Card } from './StyledComps/CardStyle.js';
import { List } from './StyledComps/ListStyle.js';
import currentProducts from '../../Contexts/CurProdContext.js';
import currentStyle from '../../Contexts/CurStyleContext.js';
const AxiosHelper = require('./AxiosHelper');


let OutfitList = ({}) => {

  let [outfits, setOutfits] = useState({});
  const {currentProd} = useContext(currentProducts);
  const {curStyle} = useContext(currentStyle);
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


  return (
    <List>
      <Card newOutfit={'newOutfit'} addOutfit={addOutfit} />
    {Object.keys(outfits).map((key, index) => {
      return <Card key={index} action={'Remove'} handleClick={removeOutfit} id={key} product={outfits[key][0]} styles={outfits[key][1]}/>
    })}
    </List>
  )

}

export default OutfitList;