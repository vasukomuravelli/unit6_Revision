// Link : https://oj.masaischool.com/contest/3032/problem/07
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  MakeWave(N, arr);
}
function MakeWave(N, arr) {
  for (let i = 0; i < N - 1; i = i + 2) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  console.log(arr.join(" "));
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
