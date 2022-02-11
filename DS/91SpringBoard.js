function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [h, w] = input[line++].trim().split(" ").map(Number);
    let tiles = [];
    for (let j = 0; j < h; j++) {
      tiles.push(input[line++].trim().split(" ").map(Number));
    }
    let dp = new Array(h).fill(-1).map(() => new Array(w).fill(-1));
    springboard(tiles, h, w, dp);
  }
}
function springboard(tiles, h, w, dp) {
  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (i == 0) {
        dp[i][j] = tiles[i][j];
      }
      if (j == 0) {
        dp[i][j] = tiles[i][j];
      }
    }
  }
  for (let i = 1; i < h; i++) {
    for (let j = 1; j < w; j++) {
      if (j < w - 1) {
        dp[i][j] =
          Math.max(dp[i - 1][j], dp[i - 1][j - 1], dp[i - 1][j + 1]) +
          tiles[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i - 1][j - 1]) + tiles[i][j];
      }
    }
  }

  console.log(Math.max(...dp[h - 1]));
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`1
  6 5
  3 1 7 4 2
  2 1 3 1 1
  1 2 2 1 8
  2 2 1 5 3
  2 1 4 4 4
  5 2 7 5 1`);
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
