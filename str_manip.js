/**
 *
 * Module for str manipulation
 *
 */

// get longest str in str ary
export function longestString(strAry) {
  let len = strAry.length;
  let max = 0;
  let tracker = 0;
  for (let i = 0; i < len; i++) {
    if (strAry[i].length > max) {
      //   console.log(max);
      max = strAry[i].length;
      tracker = i;
    }
  }
  //   console.log(strAry[tracker]);
  return strAry[tracker];
}

// string longer than
export function stringsLongerThan(ary, n) {
  let aryLStr = [];
  for (let i = 0; i < ary.length; i++) {
    if (ary[i].length > n) {
      aryLStr.push(ary[i]);
    }
  }
  return aryLStr;
}
