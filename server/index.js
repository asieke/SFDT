const express = require('express');
const { getPrices } = require('../database/models.js');

const app = express();
app.use(express.json());
const port = 8080;

app.get('/getPrices', async (req, res) => {
  //GET ALL TICKERS
  try {
    let data = await getPrices();
    res.json(data);
  } catch (err) {
    res.status(500).send('error getting prices');
  }
});

app.listen(port, () => {
  console.log('Server is running at http://localhost:' + port);
});
