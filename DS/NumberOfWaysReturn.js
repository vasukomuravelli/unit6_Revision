// Link : https://oj.masaischool.com/contest/3116/problem/05
function runProgram(input) {
  let N = +input;
  let dp = new Array(N).fill(-1);
  console.log(NumberOfWays(N, dp));
}
function NumberOfWays(N, dp) {
  if (N == 0) {
    return 1;
  }
  if (N < 0) {
    return 0;
  }
  if (dp[N - 1] != -1) {
    return dp[N - 1];
  }
  dp[N - 1] =
    NumberOfWays(N - 1, dp) + NumberOfWays(N - 2, dp) + NumberOfWays(N - 3, dp);
  return dp[N - 1];
  // Iterative Way
  // Initialization dp[0]=1;dp[1]=2;dp[2]=4;
  //for(let i=3;i<N+1;i++)
  // {
  //   dp[i] = dp[i-1]+dp[i-2]+dp[i-3];
  // }
  // return dp[N-1];
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
