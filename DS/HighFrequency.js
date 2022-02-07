// Link : https://oj.masaischool.com/contest/3003/problem/02
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    HighFrequency(N, arr);
  }
}
function HighFrequency(N, arr) {
  let obj = {};
  arr.forEach((e) => {
    obj[e] = obj[e] == undefined ? 1 : obj[e] + 1;
  });
  let maxCount = 0;
  let ans = -1;
  for (let keys in obj) {
    if (obj[keys] > maxCount) {
      maxCount = obj[keys];
      ans = keys;
    }
  }
  console.log(ans);
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
