const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let res = [];
  if(!Array.isArray(arr)) {
    throw new Error  ("'arr' parameter must be an instance of the Array!");
  } else {
    for (let i=0;i<arr.length;i++) {
      if(arr[i] === "--double-next" && arr[i+1]!= null) {
        res.push(arr[i+1]);
      } else if(arr[i-1] === "--discard-next" && (arr[i+1] === ("--double-prev" || "--discard-prev"))) {
      } else if(arr[i] === "--discard-next" && arr[i]!=null) {
  
      } else if(arr[i+1] === "--discard-prev" || arr[i] === "--discard-prev" || arr[i] === "--double-prev" || arr[i] === "--discard-next" || arr[i] === "--double-next") {
        
      } else if (arr[i+1] === "--double-prev") {
        res.push(arr[i]);
        res.push(arr[i]);
      } else {
        res.push(arr[i]);
      }
    }
  }
  return res;
}

module.exports = {
  transform
};
