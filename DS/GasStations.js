// Link : https://oj.masaischool.com/contest/3003/problem/03
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let gas = input[1].trim().split(" ").map(Number);
  let cost = input[2].trim().split(" ").map(Number);
  console.log(gasStation(N, gas, cost));
}
function gasStation(N, gas, cost) {
  let start = 0;
  let total = 0;
  let leftGas = 0;
  for (let i = 0; i < N; i++) {
    total += gas[i] - cost[i];
    if (leftGas + gas[i] - cost[i] > 0) {
      leftGas += gas[i] - cost[i];
    } else {
      start = i + 1;
      leftGas = 0;
    }
  }
  if (total >= 0) {
    return start;
  } else {
    return -1;
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
