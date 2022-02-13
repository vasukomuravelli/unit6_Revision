function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let length = input[1].trim().split(" ").map(Number);
  let value = input[2].trim().split(" ").map(Number);
  let dp = new Array(length.length + 1)
    .fill(-1)
    .map(() => new Array(N + 1).fill(-1));
  RodCutting(N, value, length, dp);
}
function RodCutting(N, value, length, dp) {
  for (let i = 0; i < length.length + 1; i++) {
    for (let j = 0; j < N + 1; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      }
    }
  }
  for (let i = 1; i < length.length + 1; i++) {
    for (let j = 1; j < N + 1; j++) {
      if (length[i - 1] <= j) {
        dp[i][j] = Math.max(
          value[i - 1] + dp[i - 1][j - length[i - 1]],
          dp[i - 1][j]
        );
      } else {
        dp[i][j] = dp[i - 1][j];
      }
    }
  }
  console.log(dp);
  console.log(dp[length.length][N]);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`4
  1 2 3 4 5 6 7 8
  1 5 8 9 10 17 17 20`);
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
