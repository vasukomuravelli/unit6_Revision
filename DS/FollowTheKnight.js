// Link : https://oj.masaischool.com/contest/3162/problem/05
function runProgram(input) {
  let [i, j, steps] = input.trim().split(" ").map(Number);
  let board = new Array(10).fill(0).map(() => new Array(10).fill(0));
  FollowTheKnight(i - 1, j - 1, steps, board);
  let count = 0;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (board[i][j] == 1) {
        count++;
      }
    }
  }
  console.log(count);
}
function FollowTheKnight(r, c, steps, board) {
  if (r < 0 || r >= board.length || c < 0 || c >= board.length) {
    return;
  }
  if (steps == 0) {
    board[r][c] = 1;
    return;
  }
  FollowTheKnight(r - 2, c - 1, steps - 1, board);
  FollowTheKnight(r - 1, c + 2, steps - 1, board);
  FollowTheKnight(r + 1, c + 2, steps - 1, board);
  FollowTheKnight(r - 1, c - 2, steps - 1, board);
  FollowTheKnight(r + 1, c - 2, steps - 1, board);
  FollowTheKnight(r + 2, c + 1, steps - 1, board);
  FollowTheKnight(r - 2, c + 1, steps - 1, board);
  FollowTheKnight(r + 2, c - 1, steps - 1, board);
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
