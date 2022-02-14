function customArrayFlat(arr, depth = 1) {
  let res = [];
  arr.forEach((ar) => {
    if (Array.isArray(ar) && depth > 0) {
      res.push(...customArrayFlat(ar, depth - 1));
    } else {
      res.push(ar);
    }
  });
  return res;
}
let arr = [
  [1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [9, 10, 11],
];
console.log(customArrayFlat(arr));
