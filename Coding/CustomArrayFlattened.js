function customFlatArray(arr, depth = 1) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) && depth > 0) {
      res.push(...customFlatArray(arr[i], depth - 1));
    } else {
      res.push(arr[i]);
    }
  }
  return res;
}

console.log(customFlatArray([1, 2, [3, 4, [5, 6], [7, 8, [9]]]], 2));

//  Custom flatening of objects

function customFlattenobj(obj) {
  let newArr = [];
  for (let k in obj) {
    if (typeof k === "object") {
      customFlattenobj(k);
    } else {
      newArr.push(obj[k]);
    }
  }
}

let obj = {
  a: 1,
};
