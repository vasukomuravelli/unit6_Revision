// Link : https://oj.masaischool.com/contest/2950/problem/04
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    RicknRichards(N, arr);
  }
}
function RicknRichards(N, arr) {
  let i = 1;
  let j = N - 2;
  sum1 = arr[0];
  sum2 = arr[N - 1];
  while (i <= j) {
    if (Math.floor(sum1 / 2) < sum2) {
      sum1 += arr[i];
      i++;
    } else {
      sum2 += arr[j];
      j--;
    }
  }
  console.log(i, N - i);
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
