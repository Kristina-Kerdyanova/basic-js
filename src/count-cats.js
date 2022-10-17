const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */

function countCats(matrix) {
  let newMatrix = matrix.flat();

  function cat(value) {
    return value === "^^";
  }

  let result = newMatrix.filter(cat);

  if (result.length < 1 || result.length === undefined) {
    return 0;
  } else {
    return result.length;
  }
}

countCats([
  [0, 1, "^^"],
  [0, "^^", 2],
  ["^^", 1, 2],
]);

module.exports = {
  countCats,
};
