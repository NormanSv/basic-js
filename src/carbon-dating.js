const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result;
  let c = Math.log(2) / HALF_LIFE_PERIOD;
  if (typeof (sampleActivity) != "string") {
    return false;
  } else {
    if (Number(sampleActivity) > 0 && Number(sampleActivity) < MODERN_ACTIVITY ) {

      result = Math.round(Math.log(MODERN_ACTIVITY / Number(sampleActivity)) / c);
    } else {
      return false;
    }
  }
  return result;
};