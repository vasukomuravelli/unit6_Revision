function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  BubbleSort(N, arr);
}
function BubbleSort(N, arr) {
  for (let i = 0; i < N - 1; i++) {
    let count = 0;
    for (let j = 0; j < N - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        count++;
      }
    }
    if (count == 0) {
      break;
    }
  }
  console.log(arr.join());
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5
    5 1 6 3 7`);
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
