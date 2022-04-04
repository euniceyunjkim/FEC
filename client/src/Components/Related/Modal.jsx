import React, {useContext} from 'react';
import { ModalStyle } from './StyledComps/ModalStyle.js';
import { ModalContent } from './StyledComps/ModalContentStyle.js';
import currentProducts from '../../Contexts/CurProdContext.js';
import currentStyle from '../../Contexts/CurStyleContext.js';
import ModalTableEntry from './ModalTableEntry.jsx';

const Modal = ({ setShowModal, showModal, compareData, styles, product }) => {
  let allFeatures = [];
  compareData.forEach((product) => {
    let features = Object.values(product);
    features.forEach((feature) => {
      allFeatures = allFeatures.concat(feature['feature']);
    })
  })
  console.log(allFeatures)
  const {currentProd} = useContext(currentProducts);
  const {curStyle} = useContext(currentStyle);

  return (
    <>{showModal ?
      (<ModalStyle block={showModal ? 'block' : 'none'}>
        <ModalContent>
          <table>
            <thead>
              <tr>
                <th>{styles.name} {product.name}</th>
                <th>Features</th>
                <th>{curStyle.name} {currentProd.name}</th>
              </tr>
            </thead>
          </table>
          <table>
            <tbody>
              {allFeatures.map((feature, index) => {
                return <ModalTableEntry feature={feature} key={index} prodOne={compareData[0]} prodTwo={compareData[1]} />
              })}
            </tbody>
          </table>
          <button onClick={() => setShowModal()}>Close</button>
        </ModalContent>
      </ModalStyle>)
      : null}
      </>
    )
}

export default Modal;