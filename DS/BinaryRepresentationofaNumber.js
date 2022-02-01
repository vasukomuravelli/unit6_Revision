function runProgram(input) {
  let N = +input;
  let str = "";
  while (N > 0) {
    str += N % 2;
    N = Math.floor(N / 2);
  }
  let str1 = "";
  for (let i = 0; i < 32 - str.length; i++) {
    str1 += 0;
  }
  console.log(str1 + str); // how to print upto 32bit ?
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
