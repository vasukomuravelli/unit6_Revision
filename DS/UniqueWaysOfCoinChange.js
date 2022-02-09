// Link : https://oj.masaischool.com/contest/2624/problem/03
function runProgram(input) {
  input = input.split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  Coinschange(n, m, arr, dp);
  // console.log(dp);
}
function Coinschange(n, m, arr, dp) {
  for (let i = 0; i < m + 1; i++) {
    for (let j = 0; j < n + 1; j++) {
      if (i == 0) {
        dp[i][j] = 0;
      }
      if (j == 0) {
        dp[i][j] = 1;
      }
    }
  }
  for (let i = 1; i < m + 1; i++) {
    for (let j = 1; j < n + 1; j++) {
      if (arr[i - 1] <= j) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - arr[i - 1]];
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  // console.log(dp);
  console.log(dp[m][n]);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(``);
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
