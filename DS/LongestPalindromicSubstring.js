// Incomplete
function runProgram(input) {
  let str = input.trim();
  let N = str.length;
  let dp = new Array(N).fill(0).map(() => new Array(N).fill(0));
  LongestPalindrome(str, N, dp);
  console.log(dp[3][6], str[2], str[7]);
}
function LongestPalindrome(str, N, dp) {
  for (let i = 0; i < N; i++) {
    dp[i][i] = 1;
  }
  for (let i = 0; i < N; i++) {
    if (str[i] == str[i + 1]) {
      dp[i][i + 1] = 1;
    }
  }
  for (let i = 0; i < N; i++) {
    for (let j = i + 2; j < N; j++) {
      console.log(i, j, dp[i + 1][j - 1], dp[3][6]);
      if (str[i] == str[j] && dp[i + 1][j - 1] == 1) {
        dp[i][j] = 1;
      }
    }
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`aaaabbaa`);
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
