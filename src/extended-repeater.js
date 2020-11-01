const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (str === null) {
    str = "null";
  } else if (str === undefined) {
    str = "";
  } else if (str === NaN) {
    str = "NaN";
  } else if (typeof(str) !== "string") {
      str = str.toString();
  }
  if (options.addition === null) {
    options.addition = "null";
  } else if (options.addition === undefined) {
    options.addition = "";
  } else if (options.addition === NaN) {
    options.addition = "NaN";
  } else if (typeof(options.addition) !== "string") {
    options.addition = options.addition.toString();
  }
  if (options.repeatTimes === "" || options.repeatTimes === undefined) {
      options.repeatTimes = 1;
  }
  if (options.additionRepeatTimes === "" || options.additionRepeatTimes === undefined) {
      options.additionRepeatTimes = 1;
  }
  if (options.separator === undefined) {
      options.separator = "+";
  }
  if (options.additionSeparator === undefined) {
      options.additionSeparator = "|";
  }
  let result = "";
  let addstr = "";
  let resultArr = [];
  let addstrArr = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
      addstrArr.push(options.addition);
  }
  addstr = addstrArr.join(options.additionSeparator);
  for (let j = 0; j < options.repeatTimes; j++) {
    resultArr.push(str + addstr);
  }
  result = resultArr.join(options.separator);
  return result;
};