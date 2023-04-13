const { NotImplementedError } = require('../extensions/index.js');

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
function countCats(a) {
let count = 0;
let cat = '^^';
let b = a.flat();
for(let i = 0; i < b.length; i++){
  if(b[i] === cat) {
    count = count + 1;
  }
}
return count;
  
}

module.exports = {
  countCats
};
