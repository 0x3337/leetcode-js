/**
 * @number 1360
 * @title Number of Days Between Two Dates
 * @url https://leetcode.com/problems/number-of-days-between-two-dates/
 * @difficulty easy
 */

const daysBetweenDates = function (date1, date2) {
  let d1 = date1.split('-');
  let d2 = date2.split('-');

  let r1 = getDaysFromEpoch(+d1[0], +d1[1], +d1[2]);
  let r2 = getDaysFromEpoch(+d2[0], +d2[1], +d2[2]);
  let res = r1 - r2;

  let mask = res >> 63;
  return (res + mask) ^ mask;
};

const isLeapYaer = function(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const getDaysInMonth = function(year, month) {
  if (month === 2) {
    return isLeapYaer(year) ? 29 : 28;
  }

  return month % 2 == month < 8 ? 31 : 30;
};

const getDaysFromEpoch = function(year, month, day) {
  let days = 0;

  for (let i = 1970; i < year; i++) {
    days += isLeapYaer(i) ? 366 : 365;
  }

  for (let i = 1; i < month; i++) {
    days += getDaysInMonth(year, i);
  }

  return days + day - 1;
};
