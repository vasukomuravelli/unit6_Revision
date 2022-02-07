// Link : https://oj.masaischool.com/contest/3003/problem/04
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  console.log(OneThirdMajority(N, arr));
}
function OneThirdMajority(N, arr) {
  let obj = {};
  arr.forEach((e) => {
    obj[e] = obj[e] === undefined ? 1 : obj[e] + 1;
  });
  for (let k in obj) {
    if (obj[k] > N / 3) {
      return k;
    }
  }
  return "";
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
