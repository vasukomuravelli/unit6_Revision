// Link : https://oj.masaischool.com/contest/3154/problem/03
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let min = CheckifSorted(N, arr);
  if (min >= 0 && min < N) {
    let left = SearchSort(arr, 0, min - 1);
    let right = SearchSort(arr, min, N - 1);
    if (left && right) {
      console.log("YES");
    } else {
      console.log("NO");
    }
  } else {
    console.log("NO");
  }
}
function CheckifSorted(N, arr) {
  let low = 0;
  let high = N - 1;
  let min = arr[0];
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > min) {
      low = mid + 1;
      min = arr[mid];
    } else {
      high = mid - 1;
    }
  }
  return low;
}
function SearchSort(arr, low, high) {
  for (let i = low; i < high; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
