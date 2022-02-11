// Link : https://oj.masaischool.com/contest/3032/problem/05
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let matrix = [];
  for (let i = 0; i < N; i++) {
    matrix.push(input[i + 1].trim().split(""));
  }
  console.log(LargestForest(N, matrix));
}
function LargestForest(N, matrix) {
  let count = -1;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      count = Math.max(count, findTrees(matrix, i, j, N, false));
    }
  }
  return count;
}
function findTrees(matrix, i, j, N, flag) {
  let size;
  if (i >= N || j >= N || i < 0 || j < 0 || matrix[i][j] == "W") {
    return 0;
  }
  if (matrix[i][j] == "T") {
    matrix[i][j] = "W";
    size = 1;
  }
  size += findTrees(matrix, i + 1, j, N, true);
  size += findTrees(matrix, i - 1, j, N, true);
  size += findTrees(matrix, i, j + 1, N, true);
  size += findTrees(matrix, i, j - 1, N, true);
  return size;
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
