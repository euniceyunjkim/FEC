import React from 'react';
import ReatDom from 'react-dom';
const should = require('chai').should();

describe('Question component', () => {
  it('Gets questions from API', () => {
    let questions = document.getElementsByClassName('questions');
    should.exist(questions);
  });
});