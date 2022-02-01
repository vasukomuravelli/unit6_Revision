function runProgram(input) {
  let str = input;
  let N = 0;
  let j = 0;
  for (let i = str.length - 1; i >= 0; i--) {
    N += 2 ** j * str[i];
    j++;
  }
  console.log(N);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`00000000000000000000000000000101`);
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
