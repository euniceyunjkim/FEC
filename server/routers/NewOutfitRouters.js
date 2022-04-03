const NewOutfitRouters = require('express').Router();

let outfits = {};

NewOutfitRouters.post('/', (req, res) => {
  outfits[req.body[0]] = [req.body[1], req.body[2]];
  res.status(201).send(outfits);
})

NewOutfitRouters.get('/', (req, res) => {
  console.log(outfits)
  res.send(outfits);
})

module.exports = NewOutfitRouters;