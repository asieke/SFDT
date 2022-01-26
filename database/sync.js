/*******************************************
 * Gets historical data from 2018-2021
 * For top 30 stocks (data.js)
 * Inserts them into PRICES table
 *******************************************/

const axios = require('axios');
const { db } = require('./index.js');
const { STOCKS } = require('./data.js');

const url = 'https://data.alpaca.markets';
const { KEY, SECRET } = process.env;
const options = {
  headers: {
    'APCA-API-KEY-ID': KEY,
    'APCA-API-SECRET-KEY': SECRET,
  },
  contentType: 'application/json',
};

const getPrices = async (ticker = 'AAPL') => {
  for (let year = 2018; year <= 2021; year++) {
    let path = `/v2/stocks/${ticker}/bars?start=${year}-01-01&end=${
      year + 1
    }-01-01&timeframe=1Hour&limit=10000`;

    let res = await axios.get(url + path, options);
    let bars = res.data.bars;

    for (let i = 0; i < bars.length; i++) {
      console.log(ticker, bars[i].t);
      let obj = {
        date: bars[i].t,
        ticker: ticker,
        open: bars[i].o,
        close: bars[i].c,
        high: bars[i].h,
        low: bars[i].l,
        avg: bars[i].vw,
        vol: bars[i].v,
      };

      try {
        await db.Price.create(obj);
      } catch (err) {
        console.log(err);
      }
    }
  }
};

const main = async () => {
  await db.initialize();
  let stocks = Object.keys(STOCKS);
  for (let i = 0; i < stocks.length; i++) {
    await getPrices(stocks[i]);
  }
  await db.close();
};

main();
