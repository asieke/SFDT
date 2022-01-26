const { db, sequelize } = require('./index.js');
const { STOCK_METADATA } = require('./data.js');

const addData = async (obj) => {
  console.log('>>>>', obj);
  await db.Result.create(obj);
};

//return an object with 1000 random price rows
const getPrices = async () => {
  //get distinct tickers and select a random one
  const data = await sequelize.query('SELECT DISTINCT ticker FROM prices');
  const ticker = data[0][Math.floor(Math.random() * data[0].length)].ticker;

  //get all the prices
  const prices = await sequelize.query(`SELECT * FROM prices WHERE ticker='${ticker}' ORDER BY id`);

  //randomly start from somewhere through N-1000
  const start = Math.floor(Math.random() * (prices[0].length - 1000));

  //build output
  const out = {
    ticker,
    url: STOCK_METADATA[ticker].url,
    name: STOCK_METADATA[ticker].name,
    description: STOCK_METADATA[ticker].description,
    start: '',
    end: '',
    prices: [],
  };

  //apend prices to output
  prices[0].forEach((x, i) => {
    if (i === start) {
      out.start = x.date;
    }
    if (i === start + 1000 - 1) {
      out.end = x.date;
    }
    if (i >= start && i < start + 1000) {
      let { date, open, close, high, low, avg, vol } = x;
      out.prices.push({ date, open, close, high, low, avg, vol });
    }
  });

  return out;
};

module.exports = { getPrices };
