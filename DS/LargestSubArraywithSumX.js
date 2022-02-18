let arr = [10, 5, 2, 7, 1, 9];
let x = 15;
// Variable size sliding window
function largetSubArr(arr, x) {
  let maxlen = 0;
  let HM = {};
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum == x) {
      maxlen = i + 1;
    }
    if (HM[sum] == undefined) {
      HM[sum] = i;
    }
    if (HM[sum - x] != undefined) {
      maxlen = Math.max(maxlen, HM[sum] - HM[sum - x]);
    }
  }
  console.log(maxlen);
}
largetSubArr(arr, x);
