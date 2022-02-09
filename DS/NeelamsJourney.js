// Link : https://oj.masaischool.com/contest/3032/problem/06
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  NeelamsJourney(N, arr);
}
function NeelamsJourney(N, arr) {
  let fare = 0;
  start = arr[0];
  let j = 0;
  for (let i = 0; i < N; i++) {
    if (arr[i] < start) {
      fare += start * (i - j);
      start = arr[i];
      j = i;
    }
  }
  fare += start * (N - j);
  console.log(fare);
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
