const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof (sampleActivity) !== 'string') {
    return false;
  }
  const k = 0.693 / HALF_LIFE_PERIOD;
  let finalActivity = parseFloat(sampleActivity);
  let age;
  if (Number.isNaN(finalActivity) ||
    finalActivity <= 0 ||
    finalActivity > 15) {
    return false;
  } else {
    age = Math.ceil(Math.log(MODERN_ACTIVITY / finalActivity) / k);
  }
  return age;
};
