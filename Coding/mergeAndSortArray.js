// [-1, 1, 4, 8, 10, 12, 24]   [0, 2, 3, 7]

let arr1 = [-1, 1, 4, 8, 10, 12, 24];
let arr2 = [0, 2, 3, 7];

function MergeandSort(arr1, arr2) {
  let i = 0;
  let j = 0;
  let ans = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      ans.push(arr1[i]);
      i++;
    } else {
      ans.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    ans.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    ans.push(arr2[j]);
    j++;
  }
  return ans;
}

// console.log(MergeandSort(arr1, arr2));

//  [[1,2, [3,[4,[5]],6,7],[8],9],10]

let mDArr = [[1, 2, [3, [4, [5]], 6, 7], [8], 9], 10];

function Convert1DArray(mDArr) {
  let ans = [];
  for (let i = 0; i < mDArr.length; i++) {
    if (Array.isArray(mDArr[i])) {
      ans.push(...Convert1DArray(mDArr[i]));
    } else {
      ans.push(mDArr[i]);
    }
  }
  return ans;
}

// console.log(Convert1DArray(mDArr));

const map = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

let str = "XIV";

async function getRoman(str) {
  let sum = 0;
  let prev;
  let i = str.length - 1;
  while (i >= 0) {
    if (prev == undefined || map[str[i]] > map[prev]) {
      sum += map[str[i]];
    } else if (map[str[i]] < map[prev]) {
      sum -= map[str[i]];
    } else {
      sum += map[str[i]];
    }
    prev = str[i];
    i--;
  }

  await new Promise((resolve, reject) => {
    setTimeout(resolve(), 5000);
  });
  return sum;
}

console.log(getRoman(str));
