// Link  : https://oj.masaischool.com/contest/3116/problem/04
function runProgram(input) {
  let [n, r] = input.trim().split(" ").map(Number);
  console.log(calculateGP(n, r).toFixed(4));
}
function calculateGP(n, r) {
  if (n < 0) {
    return 0;
  }
  return 1 / r ** n + calculateGP(n - 1, r);
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
