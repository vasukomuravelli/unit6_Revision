// Link : https://oj.masaischool.com/contest/2403/problem/2-2
function runProgram(input) {
  input = input.split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  generateSub(str1, [], 0);
  compare(str2, [], 0);
  console.log(max);
}
let obj = {};
function generateSub(str1, res, curr) {
  if (res.length > 0) {
    obj[res.join("")] = 1;
  }
  if (curr >= str1.length) {
    return;
  }
  for (let i = curr; i < str1.length; i++) {
    res.push(str1[i]);
    generateSub(str1, res, i + 1);
    res.pop();
  }
}
let max = -1;
function compare(str, res, curr) {
  if (res.length > 0) {
    if (obj[res.join("")]) {
      max = Math.max(max, res.length);
    }
  }
  if (curr >= str.length) {
    return;
  }
  for (let i = curr; i < str.length; i++) {
    res.push(str[i]);
    compare(str, res, i + 1);
    res.pop();
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
