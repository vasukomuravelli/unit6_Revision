function runProgram(input) {
  let [init, add, day] = input.trim().split(" ").map(Number);
  console.log(CalculateDecay(init, add, day));
}
function CalculateDecay(init, add, day) {
  if (day == 0) {
    return init;
  }
  return CalculateDecay(init / 2 + add, add, day - 1);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`100 30 6`);
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
