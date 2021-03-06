require('dotenv').config();

const { PGUSER, PGPASSWORD, PGHOST, PGPORT, PGDATABASE } = process.env;

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(PGDATABASE, PGUSER, PGPASSWORD, {
  host: PGHOST,
  dialect: 'postgres',
  logging: false,
});

const db = {
  Result: sequelize.define(
    'result',
    {
      ticker: Sequelize.STRING,
      startDate: Sequelize.STRING,
      endDate: Sequelize.STRING,
      totalReturn: Sequelize.FLOAT,
      totalBenchmarkReturn: Sequelize.FLOAT,
      totalBenchmark: Sequelize.FLOAT,
      totalBalance: Sequelize.FLOAT,
      totalFees: Sequelize.FLOAT,
      numTrades: Sequelize.INTEGER,
    },
    {
      indexes: [{ fields: ['ticker'] }],
    }
  ),
  Price: sequelize.define(
    'price',
    {
      date: Sequelize.STRING,
      ticker: Sequelize.STRING,
      open: Sequelize.FLOAT,
      close: Sequelize.FLOAT,
      high: Sequelize.FLOAT,
      low: Sequelize.FLOAT,
      avg: Sequelize.FLOAT,
      vol: Sequelize.FLOAT,
    },
    {
      indexes: [
        { fields: ['ticker'] },
        { fields: ['date'] },
        {
          unique: true,
          fields: ['ticker', 'date'],
        },
      ],
    }
  ),
  initialize: async () => {
    await db.Price.sync({ force: true });
    await db.Result.sync({ force: true });
  },
  close: async () => {
    await sequelize.close();
  },
};

module.exports = { db, sequelize };
