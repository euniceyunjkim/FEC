import React, {useState, useEffect} from 'react';
import ProductCard from './ProductCard.jsx';
import { Card } from './StyledComps/CardStyle.js';
import { List } from './StyledComps/ListStyle.js';
const AxiosHelper = require('./AxiosHelper');

let RelatedList = ({related}) => {

  let [relatedStyles, setRelatedStyles] = useState([]);
  useEffect(() => {
    Promise.all(
      related.map((relProd) => {
        if (relProd.id) {
          return AxiosHelper.getStyle(relProd.id).then(data => data.data.results[0])
        }
      })
    )
    .then((data) => setRelatedStyles(data))
    .catch((err) => console.error(err))
  }, [related])

  return (
    <List>
    {related.map((product, index) => {
      return <Card key={index} action={'Compare'}product={product} styles={relatedStyles[index]}/>
    })}
    </List>
  )
}

export default RelatedList;