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
    url: 'https://logo.clearbit.com/apple.news',
    name: 'Apple Computer',
    description: "The world's largest comapny and maker of overpriced phones",
  },
  TSLA: {
    url: 'https://logo.clearbit.com/tesla.com',
    name: 'Tesla',
    description: 'A company that sells 17 cars and year and is somehow worth 100x as much as Ford',
  },
  SPCE: {
    url: 'https://logo.clearbit.com/virgingalactic.com',
    name: 'Virgin Galactic',
    description: "A silly company that funds Richard Branson's trips to space",
  },
  GME: {
    url: 'https://logo.clearbit.com/gamestop.com',
    name: 'GameStop',
    description:
      'A company with a worse business model than Blockbuster video that is kept in business by an army of redditors buying its stock',
  },
  PTON: {
    url: 'https://logo.clearbit.com/onepeloton.com',
    name: 'Peloton',
    description: 'A company that sells $500 exercise bikes for $2500',
  },
  AMD: {
    url: 'https://logo.clearbit.com/amd.com',
    name: 'Advanced Micro Devices',
    description: 'An awesome company that sells chips',
  },
  PLTR: {
    url: 'https://logo.clearbit.com/palantir.com',
    name: 'Palantir',
    description:
      'An incredibly shady consulting firm that works with the federal government to spy on people',
  },
  NVDA: {
    url: 'https://logo.clearbit.com/nvidia.com',
    name: 'NVIDIA',
    description:
      "A company that sells chips you can't buy because they've all been sold to cryptocurrency miners",
  },
  AMC: {
    url: 'https://logo.clearbit.com/amctheatres.com',
    name: 'AMC Theatres',
    description: 'A movie theatre company that loses money but is beloved by redditors',
  },
  MSTR: {
    url: 'https://logo.clearbit.com/microstrategy.com',
    name: 'Microstrategy',
    description: 'A company that exists for the CEO to YOLO trade Bitcoin',
  },
  BB: {
    url: 'https://logo.clearbit.com/blackberry.com',
    name: 'BlackBerry',
    description: 'Once the worlds largest market of cellular phones, now??',
  },
  ZM: {
    url: 'https://logo.clearbit.com/zoom.us',
    name: 'Zoom Communications',
    description: 'What would be do without Zoom? the app that will forever remind people of Covid.',
  },
};
