function runProgram(input) {
  input = input.split("\n");
  let query = +input[0];
  let line = 1;
  for (let i = 0; i < query; i++) {
    let [op, value] = input[line++].trim().split(" ").map(Number);
    S2Q(op, value);
  }
}
let queue1 = [];
let queue2 = [];
let top = 0;
function S2Q(op, value) {
  if (op === 1) {
    queue1.push(value);
  } else {
    if (queue1.length === 0) {
      console.log(-1);
    } else {
      while (queue1.length) {
        queue2.push(queue1.pop());
      }
      console.log(queue2);
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
