// Link : https://oj.masaischool.com/contest/3046/problem/03
function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  Candies(N, K, arr, [], 0, 0);
  if (!flag) {
    console.log(-1);
    return;
  }
}
let flag = false;
function Candies(N, K, arr, ans, curr, sum) {
  if (sum == K) {
    flag = true;
    console.log(ans.join(" "));
  }
  if (sum > K || curr >= N) {
    return;
  }
  for (let i = curr; i < N; i++) {
    Candies(N, K, arr, [...ans, arr[i]], i, sum + arr[i]);
  }
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
