import React, { useState } from 'react';
import ProductCard from './ProductCard.jsx';
import { Card } from './StyledComps/CardStyle.js';
import { List } from './StyledComps/ListStyle.js';


let OutfitList = ({}) => {

  let [outfits, setOutfits] = useState([]);



  return (
    <List>
      <Card newOutfit={'newOutfit'}/>
    {outfits.map((product, index) => {
      return <Card key={index} product={product} styles={relatedStyles[index]}/>
    })}
    </List>
  )

}

export default OutfitList;