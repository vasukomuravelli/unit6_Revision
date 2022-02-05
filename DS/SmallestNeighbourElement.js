function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  SNE(N, arr);
}
function SNE(N, arr) {
  let stack = [];
  let str = "";
  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && peek(stack) >= arr[i]) {
      //   console.log(stack, i);
      stack.pop();
    }
    if (stack.length == 0) {
      str += -1 + " ";
    } else {
      str += peek(stack) + " ";
    }
    stack.push(arr[i]);
    // console.log(stack);
  }
  console.log(str.trim());
}
function peek(a) {
  return a[a.length - 1];
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5
    1 4 3 5 2`);
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
