// Link : https://oj.masaischool.com/contest/2968/problem/05
function runProgram(input) {
  input = input.split("\n");
  let [M, N] = input[0].trim().split(" ").map(Number);
  let matrix = [];
  for (let i = 1; i <= M; i++) {
    matrix.push(input[i].trim().split(" "));
  }
  ArrayReturns(M, N, matrix) ? console.log("YES") : console.log("NO");
}
function ArrayReturns(M, N, matrix) {
  let str = "masaischool";
  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (matrix[i][j] == str[0]) {
        //   console.log(i,j);
        if (check(matrix, M, N, i, j, 0, str)) {
          return true;
        }
      }
    }
  }
  return false;
}
function check(matrix, M, N, i, j, count, str) {
  if (i < 0 || j < 0 || i >= M || j >= N || str[count] != matrix[i][j]) {
    return false;
  }
  if (count == str.length - 1) {
    return true;
  }
  ans = false;
  ans =
    check(matrix, M, N, i + 1, j, count + 1, str) ||
    check(matrix, M, N, i, j + 1, count + 1, str) ||
    check(matrix, M, N, i - 1, j, count + 1, str) ||
    check(matrix, M, N, i, j - 1, count + 1, str) ||
    check(matrix, M, N, i + 1, j - 1, count + 1, str) ||
    check(matrix, M, N, i - 1, j + 1, count + 1, str) ||
    check(matrix, M, N, i + 1, j + 1, count + 1, str) ||
    check(matrix, M, N, i - 1, j - 1, count + 1, str);
  return ans;
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
