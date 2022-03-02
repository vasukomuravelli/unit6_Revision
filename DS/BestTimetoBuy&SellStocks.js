function runProgram(input) {
  let arr = input.split(" ").map(Number);
  let min = arr[0];
  let max = 0;
  for (let i = 1; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i] - min);
  }
  console.log(max);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`7 1 5 3 6 4`);
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
