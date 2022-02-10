function runProgram(input) {
  input = input.split("\n");
  let str1 = input[0];
  let str2 = input[1];
  let dp = new Array(str1.length + 1)
    .fill(-1)
    .map(() => new Array(str2.length + 1).fill(-1));
  console.log(LCS(str1, str2, dp, str1.length, str2.length));
  console.log(dp);
}
function LCS(str1, str2, dp, a, b) {
  if (a == 0 || b == 0) {
    dp[a][b] = 0;
  }
  if (dp[a][b] !== -1) {
    return dp[a][b];
  }
  if (str1[a - 1] == str2[b - 1]) {
    dp[a][b] = 1 + LCS(str1, str2, dp, a - 1, b - 1);
  } else {
    dp[a][b] = Math.max(
      LCS(str1, str2, dp, a - 1, b),
      LCS(str1, str2, dp, a, b - 1)
    );
  }
  return dp[a][b];
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`AEDFHR
  ABCDGH`);
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
