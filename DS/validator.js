// Link : https://oj.masaischool.com/contest/2950/problem/05
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [M, N] = input[line++].trim().split(" ").map(Number);
    let grid = [];
    for (let j = 0; j < M; j++) {
      grid.push(input[line++].trim().split(""));
    }
    isValid(M, N, grid) ? console.log("yes") : console.log("no");
  }
}
function checkpoints(M, N, grid) {
  let openings = 0;
  for (let i = 0; i < M; i++) {
    if (grid[i][0] == "." || grid[i][N - 1] == ".") {
      openings++;
    }
  }
  for (let i = 1; i < N - 1; i++) {
    if (grid[0][i] == ".") {
      openings++;
    }
    if (grid[M - 1][i] == ".") {
      openings++;
    }
  }
  //   console.log(openings);
  if (openings == 2) {
    return true;
  } else {
    return false;
  }
}
function isValid(M, N, grid) {
  if (grid === null || grid.length == 0) return false;
  if (checkpoints(M, N, grid)) {
    for (let i = 0; i < M; i++) {
      for (let j = 0; j < N; j++) {
        if (grid[i][j] == ".") {
          if (validator(grid, M, N, i, j, true)) return true;
        }
      }
    }
    return false;
  }
  return false;
}
function validator(mat, R, C, i, j, start) {
  if (i < 0 || j < 0 || i >= R || j >= C || mat[i][j] == "#") return false;
  else if ((i == 0 || i == R - 1 || j == 0 || j == R - 1) && !start)
    return true;
  start = false;
  mat[i][j] = "#";
  let res =
    validator(mat, R, C, i + 1, j, start) ||
    validator(mat, R, C, i - 1, j, start) ||
    validator(mat, R, C, i, j + 1, start) ||
    validator(mat, R, C, i, j - 1, start);
  mat[i][j] = ".";
  // console.log(mat);
  return res;
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
