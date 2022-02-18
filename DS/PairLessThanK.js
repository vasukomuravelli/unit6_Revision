// Link : https://oj.masaischool.com/contest/3116/problem/03
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    let K = +input[line++];
    PairlessthanK(N, arr, K);
  }
}
function PairlessthanK(N, arr, K) {
  let i = 0;
  let j = N - 1;
  let max = -1;
  while (i < j) {
    let sum = arr[i] + arr[j];
    if (sum < K) {
      max = Math.max(max, sum);
      i++;
    } else {
      j--;
    }
  }
  console.log(max);
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
