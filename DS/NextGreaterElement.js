// Link : https://oj.masaischool.com/contest/3142/problem/03
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    NextGreaterElement(N, arr);
  }
}
function NextGreaterElement(N, arr) {
  let stack = [];
  let str = "";
  for (let i = N - 1; i >= 0; i--) {
    while (stack.length > 0 && peek(stack) <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      str += -1 + " ";
    } else {
      str += peek(stack) + " ";
    }
    stack.push(arr[i]);
  }
  console.log(str.trim().split(" ").reverse().join(" "));
}
function peek(a) {
  return a[a.length - 1];
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
