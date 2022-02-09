// Link : https://oj.masaischool.com/contest/3032/problem/03
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let str = input[line++].trim();
    cipherString(N, str);
  }
}
function cipherString(N, str) {
  let count = 1;
  let char = str[0];
  let res = char;
  for (let i = 1; i < N; i++) {
    if (char != str[i]) {
      char = str[i];
      res += count + char;
      count = 0;
    }
    count++;
  }
  console.log(res + count);
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
