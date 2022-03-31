import React from 'react';

function Overview() {
  return (
    <div>
      <div>Logo And Search Bar</div>
      <div id="product">
        <div id="product gallery">Product Gallery</div>
        <div id="product details">
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
      </div>
      <div id="product-overview"></div>
      <div id="share-socials"></div>
    </div>
  );
}

export default Overview;
