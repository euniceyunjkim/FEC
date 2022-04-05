import React, {useContext} from 'react';
import { ModalStyle } from './StyledComps/ModalStyle.js';
import { ModalContent } from './StyledComps/ModalContentStyle.js';
import currentProducts from '../../Contexts/CurProdContext.js';
import currentStyle from '../../Contexts/CurStyleContext.js';
import ModalTableEntry from './ModalTableEntry.jsx';
import { ModalTable } from './StyledComps/TableStyle.js';
import { CardImage } from './StyledComps/ImageStyle.js';

const Modal = ({ setShowModal, showModal, compareData}) => {
  let allFeatures = [];
  let product = compareData[2];
  let styles = compareData[3];
  for (let i = 0; i < 2; i++) {
    let features = Object.values(compareData[i]);
    features.forEach((feature) => {
      allFeatures = allFeatures.concat(feature['feature']);
    })
  }
  const {currentProd} = useContext(currentProducts);
  const {curStyle} = useContext(currentStyle);

  return (
    <>{showModal ?
      (<ModalStyle block={showModal ? 'block' : 'none'}>
        <ModalContent>
          <ModalTable>
            <thead>
              <tr>
                <th>{styles.name} {product.name}</th>
                <th>Features</th>
                <th>{curStyle.name} {currentProd.name}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><CardImage src={styles.photos[0].thumbnail_url} /></td>
                <td></td>
                <td><CardImage src={curStyle.photos[0].thumbnail_url} /></td>
              </tr>
              {allFeatures.map((feature, index) => {
                return <ModalTableEntry feature={feature} key={index} compareData={compareData} />
              })}
            </tbody>
          </ModalTable>
          <button onClick={() => setShowModal()}>Close</button>
        </ModalContent>
      </ModalStyle>)
      : null}
      </>
    )
}

export default Modal;