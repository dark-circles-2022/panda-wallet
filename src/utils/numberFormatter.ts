import Numeral from 'numeral';

const toK = (num: any) => {
  return Numeral(num).format('0.[00]a');
};
const priceFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
});
export const formattedNum = (number: any, usd = false) => {
  if (isNaN(number) || number === '' || number === undefined) {
    return usd ? '0' : 0;
  }
  const num = parseFloat(number);

  if (num > 500000) {
    return (usd ? '' : '') + toK(num.toFixed(0));
  }

  if (num === 0) {
    if (usd) {
      return '0';
    }
    return 0;
  }

  if (num < 0.0001 && num > 0) {
    return usd ? '< 0.0001' : '< 0.0001';
  }

  if (num > 1000) {
    return usd
      ? '' + Number(parseFloat(num.toString()).toFixed(0)).toLocaleString()
      : '' + Number(parseFloat(num.toString()).toFixed(0)).toLocaleString();
  }

  if (usd) {
    if (num < 0.1) {
      return '' + Number(parseFloat(num.toString()).toFixed(3));
    } else {
      const usdString = priceFormatter.format(num);
      return '' + usdString.slice(1, usdString.length);
    }
  }

  return Number(parseFloat(num.toString()).toFixed(3));
};
