// Link : https://oj.masaischool.com/contest/2403/problem/1-3
function runProgram(input) {
  input = input.split("\n");
  let [N, M] = input[0].trim().split(" ").map(Number);
  let maxSteps = +input[1];
  let [srow, scol] = input[2].trim().split(" ").map(Number);
  let line = 3;
  let maze = [];
  for (let i = 0; i < N; i++) {
    maze.push(input[line++].trim().split(" "));
  }
  //   console.log(maze);
  ReturnToOrigin(maze, M, srow - 1, scol - 1, srow - 1, scol - 1, maxSteps);
  if (flag) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
let flag = false;
function ReturnToOrigin(maze, M, srow, scol, row, col, K) {
  if (row < 0 || row >= maze.length || col < 0 || col >= M) {
    return;
  } else if (row == srow && col == scol && K <= 0) {
    flag = true;
    return;
  } else if (maze[row][col] == "*" || maze[row][col] == "1") {
    return;
  } else {
    //   console.log(K,row,col);
    maze[row][col] = "1";
    ReturnToOrigin(maze, M, srow, scol, row + 1, col, K - 1);
    ReturnToOrigin(maze, M, srow, scol, row, col + 1, K - 1);
    ReturnToOrigin(maze, M, srow, scol, row - 1, col, K - 1);
    ReturnToOrigin(maze, M, srow, scol, row, col - 1, K - 1);
    maze[row][col] = ".";
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
