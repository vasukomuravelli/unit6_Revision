function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let min = Number.MAX_VALUE;
  let minIndex = -1;
  for (let i = 0; i < N; i++) {
    if (arr[i] < min) {
      min = arr[i];
      minIndex = i;
    }
  }
  let max = min;
  for (let i = minIndex + 1; i < N; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(max - min);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5
    5 1 4 6 3`);
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
