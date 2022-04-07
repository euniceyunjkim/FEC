import React from 'react';
import ReactDom from 'react-dom';
import { Logo, Cart } from '../LogoCart.jsx';

describe('Overview Component', () => {
  it('renders logo successfully', () => {
    const div = document.createElement('div');
    ReactDom.render(<Logo/>, div);
  });
});

describe('Overview Component', () => {
  it('renders cart successfully', () => {
    const div = document.createElement('div');
    ReactDom.render(<Cart/>, div);
  });
});