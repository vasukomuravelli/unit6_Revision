function runProgram(input) {
  input = input.split("\n");
  //   console.log(input);
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let dp = new Array(N + 1).fill(-1);
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 1;
    console.log(Tribonnaci(N, dp));
  }
}
function Tribonnaci(N, dp) {
  for (let i = 3; i <= N; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[N];
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
