const express = require('express');
const ReviewRouters = require('./routers/ReviewRouters');
const QARouters = require('./routers/QARouters');
const ProductRouters = require('./routers/ProductRouters');
const CartRouters = require('./routers/CartRouters');
const InteractionRouters = require('./routers/InteractionRouters');
const NewOutfitRouters = require('./routers/NewOutfitRouters');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static(`${__dirname}/../client/dist`));
app.use('/products', ProductRouters);
app.use('/qa', QARouters);
app.use('/reviews', ReviewRouters);
app.use('/cart', CartRouters);
app.use('/interactions', InteractionRouters);
app.use('/newoutfit', NewOutfitRouters);


app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
