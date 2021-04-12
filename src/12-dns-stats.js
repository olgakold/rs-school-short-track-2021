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
function getDNSStats(domains) {
  if (domains.length === 0) {
    return {};
  }
  let maxItem = domains[0];
  for (let i = 0; i < domains.length - 1; i++) {
    if (domains[i].length > domains[i + 1].length) {
      maxItem = domains[i];
    } else {
      maxItem = domains[i + 1];
    }
  }
  const items = [];
  const maxItemArr = maxItem.split('.').reverse();
  let itemsName = '';
  for (let i = 0; i < maxItemArr.length; i++) {
    itemsName = `${itemsName}.${maxItemArr[i]}`;
    items.push(itemsName);
  }
  const result = {};
  for (let i = 0; i < items.length; i++) {
    let sum = 0;
    const reg = new RegExp(items[i].split('.').reverse().join('.').slice(0, -1));
    domains.map((elem) => (elem.match(reg) ? sum++ : ''));
    result[items[i]] = sum;
  }

  return result;
}

module.exports = getDNSStats;
