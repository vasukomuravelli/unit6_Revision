// Link : https://oj.masaischool.com/contest/3132/problem/04
function runProgram(input) {
  let N = +input;
  let dp = new Array(N + 1).fill(-1);
  dp[0] = 0;
  dp[1] = 1;
  console.log(fib(N, dp));
}
function fib(N, dp) {
  if (dp[N] != -1) {
    return dp[N];
  }
  return (dp[N] = fib(N - 1, dp) + fib(N - 2, dp));
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
