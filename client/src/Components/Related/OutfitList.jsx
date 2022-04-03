import React, { useState, useContext } from 'react';
import ProductCard from './ProductCard.jsx';
import { Card } from './StyledComps/CardStyle.js';
import { List } from './StyledComps/ListStyle.js';
import currentProducts from '../../Contexts/CurProdContext.js';
import currentProducts from '../../Contexts/CurProdContext.js';

let OutfitList = ({}) => {

  let [outfits, setOutfits] = useState([]);
  const {currentProd} = useContext(currentProducts);

  let addOutfit = () => {

  }

  return (
    <List>
      <Card newOutfit={'newOutfit'} onClick={}/>
    {outfits.map((product, index) => {
      return <Card key={index} product={product} styles={relatedStyles[index]}/>
    })}
    </List>
  )

}

export default OutfitList;