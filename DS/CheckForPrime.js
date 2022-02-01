function runProgram(input) {
  let N = +input;
  if (N == 2 || N == 1) {
    console.log("Yes");
  } else {
    let count = 0;
    for (let i = 2; i <= Math.sqrt(N); i++) {
      if (N % i == 0) {
        count++;
      }
    }
  }
  count > 0 ? console.log("No") : console.log("Yes");
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`27`);
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
