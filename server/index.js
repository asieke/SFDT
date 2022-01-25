const express = require('express');
const { getPricesController } = require('./controllers.js');

const app = express();
app.use(express.json());
const port = 8080;

app.use(express.static('client/dist'));

app.get('/getPrices', getPricesController);

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});
