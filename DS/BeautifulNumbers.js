function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [l, r] = input[line++].trim().split(" ").map(Number);
    console.log(solve(l, r));
  }
  console.log(obj);
}
var obj = {};
function solve(l, r) {
  let ans = 0;
  for (let i = l; i <= r; i++) {
    if (check(i, i, {})) {
      ans += i;
    }
  }
  return ans;
}
function check(n, actualn, repetative) {
  if (obj[n]) {
    return true;
  }
  if (n == 1) {
    obj[n] = true;
    obj = { ...obj, ...repetative };
    return true;
  }
  if (repetative[n]) {
    return false;
  }
  repetative[n] = true;
  n = "" + n;
  if (n.length >= 1) {
    let newN = 0;
    for (let i = 0; i < n.length; i++) {
      newN += +(n[i] ** 2);
    }
    return check(newN, actualn, repetative);
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`2
  31 32
  7 7`);
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
