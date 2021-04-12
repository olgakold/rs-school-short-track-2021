/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) { let maxItem = domains[0];
  for (let i=0; i<domains.length-1; i++) {
      domains[i].length > domains[i+1].length ? maxItem = domains[i] : maxItem = domains[i+1]
  }    
  let items = []
  maxItemArr =  maxItem.split('.').reverse()
  let itemsName = ''
  for (let i=0; i<maxItemArr.length; i++){
      itemsName = `${itemsName}.${maxItemArr[i]}`
      items.push(itemsName) 
  }
  let result = {}
  for (let i=0; i<items.length; i++){
      let sum = 0;
      let reg = new RegExp(items[i].split('.').reverse().join('.').slice(0, -1));
      domains.map(elem => elem.match(reg) ? sum++ : '')
      result[items[i]] = sum
  }   

  return result
}

module.exports = getDNSStats;
