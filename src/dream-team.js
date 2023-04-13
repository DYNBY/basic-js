const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(a) {

  if (!Array.isArray(a)) return false;
  // assert.equal(createDreamTeam(3), false);
  // assert.equal(createDreamTeam(3.312312), false);
  // assert.equal(createDreamTeam(false), false);
  // assert.equal(createDreamTeam(null), false);
  // assert.equal(createDreamTeam(undefined), false);
  // assert.equal(createDreamTeam({ 'foo': 'bar' }), false);
  let arrF = []
  a.filter(el => {
  if(typeof(el) === "string"){
    arrF.push(el);
  }
  })
  let noSpace = arrF.map(el => el.trim());
  let arrL = noSpace.map(el => el = el[0]);
  let arrB = arrL.map(el => el.toUpperCase());
  return arrB.sort().join('');
}

module.exports = {
  createDreamTeam
};
