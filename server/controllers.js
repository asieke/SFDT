const { getPrices, addData } = require('../database/models.js');

const getPricesController = async (req, res) => {
  try {
    let data = await getPrices();
    res.json(data);
  } catch (err) {
    res.status(500).send('error getting prices');
  }
};

const addDataController = async (req, res) => {
  console.log('>>>>req body', req.body);

  try {
    let data = await addData(req.body);
    res.json(data);
  } catch (err) {
    res.status(500).send('error getting prices');
  }
};

module.exports = { getPricesController, addDataController };
