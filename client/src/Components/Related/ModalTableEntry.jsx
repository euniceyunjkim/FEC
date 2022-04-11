import React from 'react';
import { ModalIcon } from './StyledComps/NoFeatureIconStyle.js'

const ModalTableEntry = ({ feature, compareData }) => {
  let first = {};
  compareData[0].forEach((feature) => {
    let values = Object.values(feature);
    first[values[0]] = values[1];
  })
  let second = {};
  compareData[1].forEach((feature) => {
    let values = Object.values(feature);
    second[values[0]] = values[1];
  })

  return (
    <tr>
      <td>{first[feature] || <ModalIcon src='assets/PurpleX.webp' />}</td>
      <td>{feature}</td>
      <td>{second[feature] || 'None'}</td>
    </tr>
  )
}

export default ModalTableEntry;
