import React, { useState, useContext } from 'react';
import currentProducts from '../../Contexts/CurProdContext.js';

function Selection() {
  return (
    <div>
      <form>
        <div id="size">Dropdown</div>
        <div id="quantity">Dropdown</div>
        <input type="button" value="Add to bag" />
      </form>
      <button type="button">Star</button>
    </div>
  );
}

export default Selection;
