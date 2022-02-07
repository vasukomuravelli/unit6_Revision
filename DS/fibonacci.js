function runProgram(input) {
  let N = +input;
  console.log(fib(N));
}
function fib(N) {
  if (N == 1) {
    return 0;
  }
  if (N == 2) {
    return 1;
  }
  return fib(N - 1) + fib(N - 2);
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
