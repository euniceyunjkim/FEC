import React, { useState } from 'react';
import ItemDeets from './ItemDeets.jsx';
import ProductOverview from './ProductOverview.jsx';
import Socials from './Socials.jsx';

function Overview() {
  return (
    <div id="overview">
      <div>Logo And Search Bar</div>
      <div id="product">
        <div id="product gallery">Product Gallery</div>
        <div id="product details"><ItemDeets /></div>
      </div>
      <div id="product-overview"><ProductOverview /></div>
      <div id="share-socials"><Socials /></div>
    </div>
  );
}

export default Overview;
