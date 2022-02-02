// Link : https://oj.masaischool.com/contest/2968/problem/04
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    minimumSum(N, K, arr);
  }
}
function minimumSum(N, K, arr) {
  let sum = 0;
  for (let i = 0; i < K; i++) {
    sum += arr[i];
  }
  let min = sum;
  for (let i = K; i < N; i++) {
    sum += arr[i] - arr[i - K];
    min = Math.min(sum, min);
  }
  console.log(min);
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
