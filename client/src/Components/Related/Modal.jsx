import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import ModalStyle from './StyledComps/ModalStyle';
import ModalContent from './StyledComps/ModalContentStyle';
import currentProducts from '../../Contexts/CurProdContext';
import currentStyle from '../../Contexts/CurStyleContext';
import ModalTableEntry from './ModalTableEntry';
import ModalTable from './StyledComps/TableStyle';
import { CardImage } from './StyledComps/ImageStyle';
import { ModalExit } from './StyledComps/NoFeatureIconStyle';

function Modal({ setShowModal, showModal, compareData }) {
  const allFeatures = {};
  const product = compareData[2];
  const styles = compareData[3];
  for (let i = 0; i < 2; i += 1) {
    const features = Object.values(compareData[i]);
    features.forEach((feature) => {
      allFeatures[feature.feature] = true;
    });
  }
  const { currentProd } = useContext(currentProducts);
  const { curStyle } = useContext(currentStyle);

  return (
    <div>
      {showModal ? (
        <ModalStyle block={showModal ? 'block' : 'none'}>
          <ModalContent>
            <ModalTable>
              <thead>
                <tr>
                  <th>
                    {styles.name}
                    {product.name}
                  </th>
                  <th>Features</th>
                  <th>
                    {curStyle.name}
                    {currentProd.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><CardImage src={styles.photos[0].thumbnail_url || 'assets/NoImage.webp'} /></td>
                  <td />
                  <td><CardImage src={curStyle.photos[0].thumbnail_url} /></td>
                </tr>
                {Object.keys(allFeatures).map((feature) => (
                  <ModalTableEntry
                    feature={feature}
                    key={feature}
                    compareData={compareData}
                  />
                ))}
              </tbody>
            </ModalTable>
            <ModalExit onClick={() => setShowModal()} src="assets/RedX.webp" />
          </ModalContent>
        </ModalStyle>
      )
        : null}
    </div>
  );
}
Modal.defaultProps = {
  setShowModal: () => {},
  showModal: false,
  compareData: [],
}

Modal.propTypes = {
  setShowModal: PropTypes.func,
  showModal: PropTypes.bool,
  compareData: PropTypes.instanceOf(Array),
};

export default Modal;
