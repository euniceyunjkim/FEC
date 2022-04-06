import React, { useState, useEffect, useContext } from 'react';
import ProductCard from './ProductCard.jsx';
import { Card } from './StyledComps/CardStyle.js';
import { List } from './StyledComps/ListStyle.js';
import currentProducts from '../../Contexts/CurProdContext.js';
import { Modal } from './StyledComps/ModalStyle.js';
import { PreviousIcon, NextIcon } from './StyledComps/CarouselButtonStyle.js';
const AxiosHelper = require('./AxiosHelper');

let RelatedList = ({related}) => {

  let [relatedStyles, setRelatedStyles] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [compareData, setCompareData] = useState([]);
  let [current, setCurrent] = useState(0);
  var length = related.length;

  const {currentProd} = useContext(currentProducts);

  let showCompare = (product, style) => {
    Promise.all([
      AxiosHelper.getInfo(currentProd.id).then((data) => data.data.features),
      AxiosHelper.getInfo(product.id).then((data) => data.data.features)
    ])
    .then((data) => setCompareData([...data, product, style]))
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
    .then((data) => {
      setRelatedStyles(data)
    })
    .then(() => setCurrent(0))
    .catch((err) => console.error(err))
  }, [related])

  let next = () => {
    setCurrent(current === length - 3 ? 0 : current + 1);
  };

  let previous = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  }


  return (
    <List>
      {current === 0 ? null : <PreviousIcon src="overview_imgs/DarkLArrow.png" onClick={previous} />}
    {related.map((product, index) => {
      if (index < current + 3 && index > current - 1) {
        return <Card key={index} action={'Compare'} compareData={compareData} showModal={showModal}
        setShowModal={setShowModal} handleClick={() => showCompare(product, relatedStyles[index])}
        product={product} styles={relatedStyles[index]}/>
      }
    })}
      {current < length - 3 ? <NextIcon src="overview_imgs/DarkRArrow.png" onClick={next} /> : null}
    </List>
  )
}

export default RelatedList;