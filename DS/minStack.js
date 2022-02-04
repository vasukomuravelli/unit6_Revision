function runProgram(input) {
  input = input.split("\n");
  let stack = [];
  let min = Number.MAX_VALUE;
  for (let i = 0; i < input.length; i++) {
    let [op, value] = input[i].trim().split(" ");
    console.log(op);
    if (op == "push") {
      stack.push(+value);
      min = +value < min ? value : min;
    } else if (op == "pop") {
      stack.pop();
    } else {
      console.log(min);
    }
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`
    push 3
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

console.log(eval("10*10+5"));
