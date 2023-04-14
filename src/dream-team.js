const {
  NotImplementedError
} = require('../extensions/index.js');

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

function createDreamTeam(members) {
  if (Array.isArray(members)) {
    let resArr = []
    let fun = (n) => {
      resArr.push(n[0]);
    }

    members.forEach((element) => {
      if (typeof element === "string") {
        element = element.replace(/[^a-zа-яё]/gi, '').toUpperCase();
        fun(element);
      } else {
        return
      }
    });

    resArr = resArr.sort();
    resStr = resArr.join('');
    return (resStr);
  } else {
    return false;
  }
}

createDreamTeam(['Matt', 1, 'Dmitry', 'Max']);

module.exports = {
  createDreamTeam
};