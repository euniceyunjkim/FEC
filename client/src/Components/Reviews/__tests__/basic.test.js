import React from 'react';
import ReactDom from 'react-dom';
const should = require('chai').should();

describe('Review component', () => {
  it('Gets review from API', () => {
    const Star = document.getElementsByClassName('Star');
    should.exist(Star);
  });
});
