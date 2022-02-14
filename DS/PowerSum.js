// Link : https://oj.masaischool.com/contest/3073/problem/02
function runProgram(input) {
  let [X, N] = input.split(" ").map(Number);
  let arr = [];
  for (let i = 1; i < X; i++) {
    if (i ** N <= X) {
      arr.push(i ** N);
    }
  }
  // console.log(arr);
  PowerSum(N, X, arr, 0, [], 0);
  console.log(count);
}
let count = 0;
let obj = {};
function PowerSum(N, X, arr, sum, res, curr) {
  if (sum == X && obj[res.join("")] == undefined) {
    obj[res.join("")] = 1;
    //   console.log(res);
    count++;
  }
  if (sum > X || curr >= arr.length) {
    return;
  }
  PowerSum(N, X, arr, sum + arr[curr], [...res, arr[curr]], curr + 1);
  PowerSum(N, X, arr, sum, res, curr + 1);
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
