// Link : https://oj.masaischool.com/contest/2983/problems/02
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(MinimizeValue(N, arr));
  }
}
function MinimizeValue(N, arr) {
  let curr = 0;
  let min = 0;
  for (let i = 0; i < N; i++) {
    curr = curr + arr[i];
    min = Math.min(curr, min);
  }
  if (min < 0) {
    return Math.abs(min) + 1;
  } else {
    return 1;
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
