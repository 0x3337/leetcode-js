/**
 * @number 1415
 * @title The k-th Lexicographical String of All Happy Strings of Length n
 * @url https://leetcode.com/problems/the-k-th-lexicographical-string-of-all-happy-strings-of-length-n/
 * @difficulty medium
 */

const getHappyString = function (n, k) {
  let alphabet = {
    'a': ['b', 'c'],
    'b': ['a', 'c'],
    'c': ['a', 'b'],
  };

  let index = n - 1;
  let counter = 2 ** n - 1;
  let listSize = 3 * (2 ** index);

  let res = '', lc = 'c';

  if (k-- > listSize) {
    return res;
  }

  if (k > counter) {
    res += lc;
    counter >>= 1;
    index--;
  }

  while (counter > 0) {
    let b = (k >> index--) & 1;
    lc = alphabet[lc][b];
    res += lc;
    counter >>= 1;
  }

  return res;
};
