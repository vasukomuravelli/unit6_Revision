// Link : https://oj.masaischool.com/contest/3053/problem/05
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);
    let arr = [];
    for (let j = 0; j < N; j++) {
      arr.push(input[line++].trim().split(""));
    }
    WalkinPark(N, M, arr);
  }
}
function WalkinPark(N, M, arr) {
  let i = 0;
  let j = 0;
  let count = 0;
  while (i >= 0 && j >= 0 && i < N && j < M) {
    if (arr[i][j] == "R") {
      arr[i][j] = ".";
      j++;
      count++;
    } else if (arr[i][j] == "L") {
      arr[i][j] = ".";
      j--;
      count++;
    } else if (arr[i][j] == "D") {
      arr[i][j] = ".";
      i++;
      count++;
    } else if (arr[i][j] == "U") {
      arr[i][j] = ".";
      i--;
      count++;
    } else {
      break;
    }
  }
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
