function runProgram(input) {
  let N = +input;
  let board = new Array(N).fill(0).map(() => new Array(N).fill(0));
  NQueens(board, 0) ? console.log(board) : console.log("Not Possible!");
}
function NQueens(board, row) {
  if (row == board.length) {
    return true;
  }
  for (let i = 0; i < board.length; i++) {
    if (solve(board, i, row)) {
      board[row][i] = 1;
      if (NQueens(board, row + 1)) {
        return true;
      }
      board[row][i] = 0;
    }
  }
  return false;
}
function solve(board, col, row) {
  for (let i = 0; i < board.length; i++) {
    if (board[row][i] == 1) {
      return false;
    }
  }
  for (let i = 0; i < board.length; i++) {
    if (board[i][col] == 1) {
      return false;
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      if (i + j == row + col) {
        if (board[i][j] == 1) {
          return false;
        }
      }
      if (i - j == row - col) {
        if (board[i][j] == 1) {
          return false;
        }
      }
    }
  }
  return true;
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`4`);
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
