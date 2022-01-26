const { db, sequelize } = require('./index.js');
const { STOCKS } = require('./data.js');

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
    name: STOCKS[ticker].name,
    description: STOCKS[ticker].description,
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

const getSummaryStats = async () => {
  let data = await sequelize.query(`
    SELECT
      "ticker",
      count(1) as num,
      sum(case when "totalReturn" > "totalBenchmarkReturn" then 1 else 0 end) as beatMarket,
      sum("totalBalance") as totalBalance,
      sum("totalBenchmark") as totalBenchmark,
      sum("totalFees") as totalFees
    FROM results GROUP by ticker;
  `);

  let data2 = await sequelize.query(`
    WITH temp AS (
      SELECT
      CASE when "numTrades" <= 3 then '0-3' when "numTrades" < 7 then '4-6' else '7+' END as bucket, *
      FROM results
    )
    SELECT
      bucket,
      count(1) as num,
      sum(case when "totalReturn" > "totalBenchmarkReturn" then 1 else 0 end) as beatMarket,
      sum("totalBalance") as totalBalance,
      sum("totalBenchmark") as totalBenchmark,
      sum("totalFees") as totalFees
    FROM temp GROUP BY bucket;
  `);

  let data3 = await sequelize.query(`
  SELECT
    'total' as ticker,
    count(1) as num,
    sum(case when "totalReturn" > "totalBenchmarkReturn" then 1 else 0 end) as beatMarket,
    sum("totalBalance") as totalBalance,
    sum("totalBenchmark") as totalBenchmark,
    sum("totalFees") as totalFees
  FROM results;
`);
  return {
    tickerData: [...data[0], data3[0][0]],
    bucketData: data2[0],
  };
};

module.exports = { getPrices, addData, getSummaryStats };
