// Link : https://oj.masaischool.com/contest/3062/problem/06
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let K = +input[2];
  unique(N, arr, [], 0, 0, K);
  flag ? console.log("True") : console.log("False");
}
let flag = false;
function unique(N, arr, ans, sum, curr, K) {
  if (sum % 2 != 0) {
    let obj = {};
    ans.forEach((e) => {
      if (obj[e] === undefined) {
        obj[e] = 1;
      } else {
        return false;
      }
    });
    // console.log(ans);
    if (Object.keys(obj).length == K) {
      flag = true;
    }
  }
  if (curr >= N) {
    return;
  }
  unique(N, arr, [...ans, arr[curr]], sum + arr[curr], curr + 1, K);
  unique(N, arr, ans, sum, curr + 1, K);
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
