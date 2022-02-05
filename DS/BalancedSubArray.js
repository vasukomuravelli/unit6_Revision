// Link : https://oj.masaischool.com/contest/2983/problem/04

function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    BalancedSubArray(N, arr);
  }
}
function BalancedSubArray(N, arr) {
  let ans = {};
  let count = 0;
  let max = 0;
  for (let i = 0; i < N; i++) {
    count = arr[i] == 0 ? count - 1 : count + 1;
    if (count == 0) {
      max = Math.max(max, i + 1);
    } else if (ans[count] == undefined) {
      ans[count] = i;
    } else {
      max = Math.max(max, i - ans[count]);
    }
  }
  console.log(max);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`1
  5
  1 0 0 1 0`);
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
