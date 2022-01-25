const { default: axios } = require('axios');

module.exports.STOCKS = [
  'AAPL',
  'TSLA',
  'SPCE',
  'GME',
  'PTON',
  'AMD',
  'PLTR',
  'NVDA',
  'AMC',
  'MSTR',
  'BB',
  'ZM',
];

module.exports.STOCK_METADATA = {
  AAPL: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144745/aapl_dbc3jp.png',
    name: 'Apple Computer',
    description: "The world's largest comapny and maker of overpriced phones",
  },
  TSLA: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144745/tsla_rsz2ya.jpg',
    name: 'Tesla',
    description: 'A company that sells 17 cars and year and is somehow worth 100x as much as Ford',
  },
  SPCE: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144745/spce_bnob6i.png',
    name: 'Virgin Galactic',
    description: "A silly company that funds Richard Branson's trips to space",
  },
  GME: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144745/gme_fifqje.png',
    name: 'GameStop',
    description:
      'A company with a worse business model than Blockbuster video that is kept in business by an army of redditors buying its stock',
  },
  PTON: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144745/pton_bpfdhg.png',
    name: 'Peloton',
    description: 'A company that sells $500 exercise bikes for $2500',
  },
  AMD: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144745/amd_ufovlp.png',
    name: 'Advanced Micro Devices',
    description: 'An awesome company that sells chips',
  },
  PLTR: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144744/pltr_fjrvns.png',
    name: 'Palantir',
    description:
      'An incredibly shady consulting firm that works with the federal government to spy on people',
  },
  NVDA: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144745/nvda_kha8yu.png',
    name: 'NVIDIA',
    description:
      "A company that sells chips you can't buy because they've all been sold to cryptocurrency miners",
  },
  AMC: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144744/amc_trlmoh.png',
    name: 'AMC Theatres',
    description: 'A movie theatre company that loses money but is beloved by redditors',
  },
  MSTR: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144744/mstr_wzecgr.png',
    name: 'Microstrategy',
    description: 'A company that exists for the CEO to YOLO trade Bitcoin',
  },
  BB: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144744/bb_q9s6gt.png',
    name: 'BlackBerry',
    description: 'Once the worlds largest market of cellular phones, now??',
  },
  ZM: {
    url: 'https://res.cloudinary.com/dkit4ixkx/image/upload/v1643144744/zm_rhl7ga.png',
    name: 'Zoom Communications',
    description: 'What would be do without Zoom? the app that will forever remind people of Covid.',
  },
};
