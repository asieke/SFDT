const { getPrices } = require('../database/models.js');

const getPricesController = async (req, res) => {
  try {
    let data = await getPrices();
    res.json(data);
  } catch (err) {
    res.status(500).send('error getting prices');
  }
};

module.exports = { getPricesController };
