/**
 * @number 567
 * @title Permutation in String
 * @url https://leetcode.com/problems/permutation-in-string/
 * @difficulty medium
 */

const ALPHABET_CHAR_COUNT = 26;

const checkInclusion = function (s1, s2) {
  let [s1map, s2map] = [{}, {}];

  for (let i = 0; i < ALPHABET_CHAR_COUNT; i++) {
    let char = String.fromCharCode(97 + i);

    s1map[char] = 0;
    s2map[char] = 0;
  }

  for (let i = 0; i < s1.length; i++) {
    s1map[s1[i]]++;
    s2map[s2[i]]++;
  }

  for (let i = s1.length; i < s2.length; i++) {
    if (match(s1map, s2map)) {
      return true;
    }

    s2map[s2[i]]++;
    s2map[s2[i - s1.length]]--;
  }

  return match(s1map, s2map);
};

const match = function (s1map, s2map) {
  for (let i = 0; i < ALPHABET_CHAR_COUNT; i++) {
    let char = String.fromCharCode(97 + i);

    if (s1map[char] !== s2map[char]) {
      return false;
    }
  }

  return true;
}
