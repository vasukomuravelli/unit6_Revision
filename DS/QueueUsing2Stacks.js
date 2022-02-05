function runProgram(input) {
  input = input.split("\n");
  let Q = +input[0];
  let line = 1;
  for (let i = 0; i < Q; i++) {
    let [op, value] = input[line++].trim().split(" ").map(Number);
    Q2S(op, value);
  }
}
let stack1 = [];
let stack2 = [];
function Q2S(op, value) {
  if (op === 1) {
    stack1.push(value);
  } else {
    if (stack1.length > 0) {
      while (stack1.length) {
        stack2.push(stack1.pop());
      }
      console.log(stack2.pop());
      while (stack2.length) {
        stack1.push(stack2.pop());
      }
    } else {
      console.log(-1);
    }
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5
  1 2
  1 3
  2
  1 4
  2`);
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
