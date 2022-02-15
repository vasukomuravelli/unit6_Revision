// Link : https://oj.masaischool.com/contest/3087/problem/02
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = input[line++].trim();
    SuperDigit(N);
  }
}
function SuperDigit(N) {
  if (N.length == 1) {
    console.log(N);
  } else {
    while (N.length > 1) {
      let sum = 0;
      for (let i = 0; i < N.length; i++) {
        sum += Number(N[i]);
      }
      N = "" + sum;
    }
    console.log(N);
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
