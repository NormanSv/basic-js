const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = matrix.flat().filter(a => a === '^^');
  return result.length;
};
