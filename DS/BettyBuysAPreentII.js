function runProgram(input) {
  input = input.split("\n");
  let [N, P] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let dp = new Array(P + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  Betty(N, P, arr, dp);
}
function Betty(N, P, arr, dp) {
  for (let i = 1; i <= P; i++) {
    for (let j = 0; j < N; j++) {
      if (arr[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - arr[j]] + 1);
      }
    }
  }
  if (dp[P] != Number.MAX_VALUE) {
    console.log(dp[P]);
  } else {
    console.log(-1);
  }
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
