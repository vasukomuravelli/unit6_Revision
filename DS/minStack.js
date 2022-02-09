function runProgram(input) {
  input = input.split("\n");
  let stack = [];
  let min = [];
  for (let i = 0; i < input.length; i++) {
    let [op, value] = input[i].trim().split(" ");
    if (op == "push") {
      stack.push(+value);
      if (min.length == 0) {
        min.push(+value);
      } else if (peek(min) > +value) {
        min.push(+value);
      }
    } else if (op == "pop()") {
      let x = stack.pop();
      if (x == peek(min)) {
        min.pop();
      }
    } else if (op == "getMin()") {
      console.log(peek(min));
    }
  }
}
function peek(a) {
  return a[a.length - 1];
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`push 3
    push 5
    push 1
    getMin()
    pop()
    getMin()`);
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