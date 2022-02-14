// Link : https://oj.masaischool.com/contest/3062/problem/04
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, Q] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    Shinchan(N, Q, arr);
  }
}
function Shinchan(N, Q, arr) {
  if (N == 1) {
    console.log(0);
  } else {
    let sum = 0;
    for (let i = 0; i < N - 1; i++) {
      sum += Q * Math.abs(arr[i] - arr[i + 1]);
    }
    console.log(sum);
  }
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
