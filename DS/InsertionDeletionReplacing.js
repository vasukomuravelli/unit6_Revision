function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let crctStr = input[line++].trim();
    let inpStr = input[line++].trim();
    FamousQ(crctStr, inpStr);
  }
}
function FamousQ(crctStr, inpStr) {
  let a = crctStr.length;
  let b = inpStr.length;
  let dp = new Array(a + 1).fill(0).map(() => new Array(b + 1).fill(0));
  for (let i = 0; i < a + 1; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j < b + 1; j++) {
    dp[0][j] = j;
  }
  for (let i = 1; i < a + 1; i++) {
    for (let j = 1; j < b + 1; j++) {
      if (crctStr[i - 1] == inpStr[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
    }
  }
  console.log(dp[a][b]);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`3
    abcde
    abde
    abde
    abcde
    abcde
    abxde`);
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
