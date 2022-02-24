// Link : https://oj.masaischool.com/contest/3162/problem/04
function runProgram(input) {
  let [N, K] = input.trim().split(" ").map(Number);
  let arr = [];
  for (let i = 0; i < N; i++) {
    arr.push(i + 1);
  }
  BirthdayShopping(N, K, arr, [], 0);
}
let obj = {};
function BirthdayShopping(N, K, arr, res, curr) {
  if (res.length == K && obj[res] == undefined) {
    obj[res] = 1;
    console.log(res.join(" "));
  }
  if (curr >= N) {
    return;
  }
  BirthdayShopping(N, K, arr, [...res, arr[curr]], curr + 1);
  BirthdayShopping(N, K, arr, res, curr + 1);
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
