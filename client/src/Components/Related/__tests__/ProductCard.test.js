import React from 'react';
import ReactDom from 'react-dom';
import { Card } from '../StyledComps/CardStyle.js';

it('renders a card successfully', () => {
  const div = document.createElement("div");
  ReactDom.render(<Card />, div)
})

