const NewOutfitRouters = require('express').Router();

let outfits = [];

NewOutfitRouters.post('/', (req, res) => {
  outfits.push(req.body);
  res.status(201).send(outfits);
})

NewOutfitRouters.get('/', (req, res) => {
  res.send(outfits);
})

module.exports = NewOutfitRouters;