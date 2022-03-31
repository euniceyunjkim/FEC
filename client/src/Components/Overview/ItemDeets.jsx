import React from 'react';

function ItemDeets() {
  return (
    <div>
      <div id="review summ">Review Summary</div>
      <div id="product category">Product Category</div>
      <h3>Product Name</h3>
      <h5>$199</h5>
      <div id="style-box"></div>
      <div id="checkout-box">
        <div id="size">Dropdown</div>
        <div id="quantity">Dropdown</div>
        <button type="button">Add to Bag</button>
        <button type="button">Star</button>
      </div>
    </div>
  );
}

export default ItemDeets;
