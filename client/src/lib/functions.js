export const numberWithCommas = (x) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const numToPct = (x) => {
  return Math.round(x * 1000) / 10 + '%';
};

export const numToDollar = (x) => {
  let str = numberWithCommas(Math.round(x * 100) / 100);
  if (str.indexOf('.') === -1) {
    return str + '.00';
  }
  if (str.length - str.indexOf('.') === 2) {
    return str + '0';
  }
  return str;
};
