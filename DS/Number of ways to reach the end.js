// Link : https://oj.masaischool.com/contest/3162/problem/02
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let x = input[line++].trim().split(" ").map(Number);
    let y = input[line++].trim().split(" ").map(Number);
    NumberOfWaystoreachEnd(N, x, y);
  }
}
function NumberOfWaystoreachEnd(N, x, y) {
  let count = 0;
  let remaining = 0;
  let target = 100000;
  for (let i = N - 1; i >= 0; i--) {
    if (x[i] + y[i] + remaining >= target) {
      count++;
      remaining = 0;
      target = x[i];
    } else {
      remaining += y[i];
    }
  }
  console.log(count);
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
