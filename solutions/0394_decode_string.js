/**
 * @number 394
 * @title Decode String
 * @url https://leetcode.com/problems/decode-string/
 * @difficulty medium
 */

const decodeString = function (s) {
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let c = s[i];

    if (c === ']') {
      let substr = '';
      while (c = stack.pop()) {
        if (c === '[') break;

        substr = c + substr;
      }

      let k = '';
      while (c = stack.pop()) {
        if (c < '0' || c > '9') {
          stack.push(c);
          break;
        }

        k = c + k;
      }

      let num = parseInt(k);
      while (num--) {
        stack.push(substr);
      }
    } else {
      stack.push(c);
    }
  }

  return stack.join('');
};
