// Link : https://oj.masaischool.com/contest/3046/problem/04
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
let obj = {};
let flag = false;
function Candies(N, K, arr, ans, curr, sum) {
  if (sum == K && !obj[ans.join(" ")]) {
    obj[ans.join(" ")] = 1;
    flag = true;
    console.log(ans.join(" "));
  }
  if (sum > K || curr >= N) {
    return;
  }
  Candies(N, K, arr, [...ans, arr[curr]], curr + 1, sum + arr[curr]);
  Candies(N, K, arr, ans, curr + 1, sum);
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
