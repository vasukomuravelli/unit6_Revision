// Link : https://oj.masaischool.com/contest/3073/problem/05
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  let ans = [];
  for (let i = 1; i <= 10; i++) {
    ans.push(fact(i));
  }
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    FactorialPayment(ans, N);
  }
}
function FactorialPayment(arr, N) {
  let min = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (N == 0) break;
    if (N < arr[i]) continue;
    else {
      min += Math.floor(N / arr[i]);
      N = N % arr[i];
    }
  }
  console.log(min);
}
function fact(N) {
  if (N == 0) {
    return 1;
  }
  if (N == 1 || N == 2) {
    return N;
  }
  return N * fact(N - 1);
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
