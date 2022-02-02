// Link : https://oj.masaischool.com/contest/2968/problem/02
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let maze = [];
    for (let j = 0; j < N; j++) {
      maze.push(input[line++].trim().split(""));
    }
    ExitTheGrid(N, maze);
  }
}
function ExitTheGrid(N, maze) {
  let i = 0;
  let j = 0;
  let count = 0;
  while (i >= 0 && j >= 0 && i < N && j < N) {
    if (maze[i][j] == "V") {
      count = 0;
      break;
    } else if (maze[i][j] == "L") {
      maze[i][j] = "V";
      j--;
      count++;
    } else if (maze[i][j] == "R") {
      maze[i][j] = "V";
      j++;
      count++;
    } else if (maze[i][j] == "D") {
      maze[i][j] = "V";
      i++;
      count++;
    } else if (maze[i][j] == "U") {
      maze[i][j] = "V";
      i--;
      count++;
    }
  }
  //   console.log(maze);
  console.log(count);
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
