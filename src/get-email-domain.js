const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
 function getEmailDomain(email) {
  let result = email.substr(+`${email.indexOf('@')+1}`);
  if (result.indexOf('@') > 0) {
      result = result.substr(+`${result.indexOf('@')+1}`)
  }
 return(result);
}

getEmailDomain(('unusual.com@usual.com'), 'usual.com')
module.exports = {
  getEmailDomain
};
