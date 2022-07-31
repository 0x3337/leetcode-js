/**
 * @number 205
 * @title Isomorphic Strings
 * @url https://leetcode.com/problems/isomorphic-strings/
 * @difficulty easy
 */

const isIsomorphic = function (s, t) {
  let mapStoT = {};
  let mapTtoS = {};

  for (let i = 0; i < s.length; i++) {
    let [c1, c2] = [s[i], t[i]];

    if (!mapStoT[c1] && !mapTtoS[c2]) {
      mapStoT[c1] = c2;
      mapTtoS[c2] = c1;
    } else if (!(mapStoT[c1] === c2 && mapTtoS[c2] === c1)) {
      return false;
    }
  }

  return true;
};
