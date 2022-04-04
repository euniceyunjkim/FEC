import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard.jsx';
import { Card } from './StyledComps/CardStyle.js';
import { List } from './StyledComps/ListStyle.js';
import currentProducts from '../../Contexts/CurProdContext.js';
import { Modal } from './StyledComps/ModalStyle.js';
const AxiosHelper = require('./AxiosHelper');

let RelatedList = ({related}) => {

  let [relatedStyles, setRelatedStyles] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [compareData, setCompareData] = useState([]);

  const {currentProd} = useContext(currentProducts);

  let showCompare = (product) => {
    Promise.all([
      AxiosHelper.getInfo(currentProd.id).then((data) => data.data.features),
      AxiosHelper.getInfo(product.id).then((data) => data.data.features)
    ])
    .then((data) => setCompareData(data))
    .then(() => setShowModal(previous => !previous))
    .catch((err) => console.log(err))
  }

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
      return <Card key={index} action={'Compare'} compareData={compareData} showModal={showModal}
      setShowModal={setShowModal} handleClick={() => showCompare(product)}
      product={product} styles={relatedStyles[index]}/>
    })}
    </List>
  )
}

export default RelatedList;