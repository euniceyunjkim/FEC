import React, { useState, useContext, useEffect } from 'react';
import currentStyle from '../../Contexts/CurStyleContext.js';

function Selection({ }) {
  const [photos, setPhotos] = useState([]);
  const [skus, setSkus] = useState({});
  const { curStyle } = useContext(currentStyle);

  return (
    <div>
      {console.log(curStyle)}
      <form>
        <div id="size">
          <select>
            <option value="size">Small</option>
          </select>
        </div>
        <div id="quantity">
          <select>
            <option value="quant">1</option>
          </select>
        </div>
        <input type="button" value="Add to bag" />
      </form>
      <button type="button">Star</button>
    </div>
  );
}

export default Selection;
