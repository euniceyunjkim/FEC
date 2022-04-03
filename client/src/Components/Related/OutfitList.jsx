import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard.jsx';
import { Card } from './StyledComps/CardStyle.js';
import { List } from './StyledComps/ListStyle.js';
const AxiosHelper = require('./AxiosHelper');


let OutfitList = ({}) => {

  let [outfits, setOutfits] = useState({});


  useEffect(() => {
    AxiosHelper.getOutfits()
    .then((data) => setOutfits(data.data))
    .catch((err) => console.log(err))
  }, [])


  return (
    <List>
      <Card newOutfit={'newOutfit'} setOutfits={setOutfits}/>
    {Object.keys(outfits).map((key, index) => {
      return <Card key={index} action={'Remove'} product={outfits[key][0]} styles={outfits[key][1]}/>
    })}
    </List>
  )

}

export default OutfitList;