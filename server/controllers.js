const { getPrices, addData, getSummaryStats } = require('../database/models.js');

const getPricesController = async (req, res) => {
  try {
    let data = await getPrices();
    res.json(data);
  } catch (err) {
    res.status(500).send('error getting prices');
  }
};

const addDataController = async (req, res) => {
  try {
    let data = await addData(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).send('error adding data');
  }
};

const getSummaryStatsController = async (req, res) => {
  try {
    let data = await getSummaryStats();
    res.json(data);
  } catch (err) {
    res.status(500).send('error getting summary stats');
  }
};

module.exports = { getPricesController, addDataController, getSummaryStatsController };
