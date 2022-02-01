function runProgram(input) {
  let N = +input;
  while (N % 2 == 0) {
    N = N / 2; // Time-complexity : logN
  }
  if (N == 1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  // 2nd Method :
  // using Bit Manipulation !N&(N-1) ? return true  : return false
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`2056`);
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
