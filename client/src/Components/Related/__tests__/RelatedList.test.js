import React from 'react';
import ReactDom from 'react-dom';
import RelatedList from '../RelatedList.jsx';
const AxiosHelper = require('../AxiosHelper');

const related = [];
beforeEach(() => {
  return (
    AxiosHelper.getRelated('40344')
    .then((data) => {related = data.data})
    .catch(err => console.error(err))
  )
})

// it('AxiosHelper grabs the related array correctly', () => {
//   return (
//     Promise.all([AxiosHelper.getInfo('40345'), AxiosHelper.getInfo('40346'), AxiosHelper.getInfo('40351'), AxiosHelper.getInfo('40350')])
//     .then((data) => {
//       expect(related).toEqual(data);
//     })
//     .catch((err) => console.error(err))
//   )
// })

it('renders the related list successfully', () => {
  const div = document.createElement("div");
  ReactDom.render(<RelatedList related={related}/>, div)
})
