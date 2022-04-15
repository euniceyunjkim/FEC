import React from 'react';
import PropTypes from 'prop-types';
import { ModalIcon } from './StyledComps/NoFeatureIconStyle';

function ModalTableEntry({ feature, compareData }) {
  const first = {};
  compareData[0].forEach((feat) => {
    const [category, value] = Object.values(feat);
    first[category] = value;
  });
  const second = {};
  compareData[1].forEach((feat) => {
    const [category, value] = Object.values(feat);
    second[category] = value;
  });

  return (
    <tr>
      <td>{first[feature] || <ModalIcon src="assets/PurpleX.webp" />}</td>
      <td>{feature}</td>
      <td>{second[feature] || <ModalIcon src="assets/PurpleX.webp" />}</td>
    </tr>
  );
}

ModalTableEntry.propTypes = {
  feature: PropTypes.string.isRequired,
  compareData: PropTypes.instanceOf(Array).isRequired,
};
export default ModalTableEntry;
