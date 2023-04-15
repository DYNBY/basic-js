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
if (!Array.isArray(arr)) throw new Error(`'arr' parameter must be an instance of the Array!`);

let newArr = [];
  if (arr.length > 0) {
    arr.forEach((el, i) => {
      if (el === '--double-prev') newArr.push(newArr[i-1]);
      else if (el === '--double-next') newArr.push(arr[i+1]);
      else if (el === '--discard-prev') {
        newArr[i-1] = undefined;
        newArr.push(undefined);
      }
      else if (el === '--discard-next') {
        newArr.push(undefined);
      }
      else if (arr[i-1] === '--discard-next') {
        newArr.push(undefined);
      }
      else newArr.push(el);
    });
  }

  return newArr.filter(el => typeof el !== 'undefined');
}

module.exports = {
  transform
};
