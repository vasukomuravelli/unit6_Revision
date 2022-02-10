function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let first = arr.slice(0, N);
  let second = arr.slice(N, 2 * N);
  let sum1 = first.reduce((acc, cur) => acc + cur);
  let sum2 = second.reduce((acc, cur) => acc + cur);
  console.log(Math.abs(sum1 - sum2) > K ? "Invalid" : "Valid");
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
