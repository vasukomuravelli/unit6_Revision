// Link : https://oj.masaischool.com/contest/2403/problem/3-1
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [S, N] = input[line++].trim().split(" ").map(Number);
    let Weight = [];
    let Value = [];
    for (let j = 0; j < N; j++) {
      let [w, v] = input[line++].trim().split(" ").map(Number);
      Weight.push(w);
      Value.push(v);
    }
    console.log(KnapSack(S, N, Weight, Value));
  }
}
let max = 0;
function KnapSack(S, N, Weight, Value) {
  if (N == 0 || S == 0) {
    return 0;
  }
  if (Weight[N - 1] <= S) {
    return Math.max(
      Value[N - 1] + KnapSack(S - Weight[N - 1], N - 1, Weight, Value),
      KnapSack(S, N - 1, Weight, Value)
    );
  } else {
    return KnapSack(S, N - 1, Weight, Value);
  }
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
