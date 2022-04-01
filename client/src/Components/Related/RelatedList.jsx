import React from 'react';
import ProductCard from './ProductCard.jsx';

let RelatedList = ({related}) => {

  return (
    <>
    {related.map((product, index) => {
      return <ProductCard key={index} product={product} />
    })}
    </>
  )
}

export default RelatedList;