const express = require('express');
const {
  getPricesController,
  addDataController,
  getSummaryStatsController,
} = require('./controllers.js');

const app = express();
app.use(express.json());
const port = 8080;

app.use(express.static('client/dist'));

app.get('/getPrices', getPricesController);

app.post('/addData', addDataController);

app.get('/getData', getSummaryStatsController);

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});
