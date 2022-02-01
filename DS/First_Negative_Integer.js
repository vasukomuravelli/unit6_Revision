function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    FirstNegativeInteger(N, K, arr);
  }
}
function FirstNegativeInteger(N, K, arr) {
  let str = "";
  for (let i = 0; i < N - K + 1; i++) {
    let ans = 0;
    for (let j = i; j < K + i; j++) {
      if (arr[j] < 0) {
        ans = arr[j];
        break;
      }
    }
    str += ans + " ";
  }
  console.log(str.trim());
}
if (process.env.USERNAME === "vasuk") {
  runProgram(``);
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
