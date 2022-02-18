// Link : https://oj.masaischool.com/contest/2403/problem/2-1
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let target = +input[2];
  SumExist(N, arr, target, 0, 0);
  console.log(flag ? "yes" : "no");
}
let flag = false;
function SumExist(N, arr, target, sum, curr) {
  if (sum == target) {
    flag = true;
    return;
  }
  if (curr >= N) {
    return;
  }
  SumExist(N, arr, target, sum + arr[curr], curr + 1);
  SumExist(N, arr, target, sum, curr + 1);
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
