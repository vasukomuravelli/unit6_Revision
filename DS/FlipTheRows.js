// Link : https://oj.masaischool.com/contest/3062/problem/02
function runProgram(input) {
  input = input.split("\n");
  let [R, C] = input[0].trim().split(" ").map(Number);
  let matrix = [];
  let line = 1;
  for (let i = 0; i < R; i++) {
    matrix.push(input[line++].trim().split(" ").map(Number));
  }
  let arr = [];
  for (let i = 0; i < R; i += 1) {
    let dummy = [];
    if (i % 2 == 1) {
      for (let j = C - 1; j >= 0; j--) {
        dummy.push(matrix[i][j]);
      }
      arr.push(dummy);
    } else {
      for (let j = 0; j < C; j++) {
        dummy.push(matrix[i][j]);
      }
      arr.push(dummy);
    }
  }
  arr.forEach((e) => {
    console.log(e.join(" "));
  });
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
