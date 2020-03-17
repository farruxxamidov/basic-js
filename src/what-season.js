module.exports = function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }

  let testDate=new Date();
  if (!(date instanceof Date)
    || (date instanceof Date) && (date.hasOwnProperty('getMonth') || date.hasOwnProperty('getString'))) {
    throw new Error();
  }

  const season = [
    'winter', 'winter',
    'spring', 'spring', 'spring',
    'summer', 'summer', 'summer',
    'autumn', 'autumn', 'autumn',
    'winter'];
  return season[date.getMonth()];
};
