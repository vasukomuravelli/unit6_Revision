//  Link : https://oj.masaischool.com/contest/2968/problem/01
function runProgram(input) {
  let [a, b, c, d] = input.split(" ").map(Number);
  if (a + b === c + d || a + c === b + d || a + d === b + c) {
    console.log("Yes");
  } else {
    console.log("No");
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
