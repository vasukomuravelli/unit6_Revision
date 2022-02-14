// Link : https://oj.masaischool.com/contest/3073/problem/01
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    FlowerManagement(N, M, arr);
  }
}
function FlowerManagement(N, M, arr) {
  let i = 0;
  while (i < N && M > 0) {
    if (arr[i] == 1) {
      i += 2;
    } else {
      if (arr[i - 1] != 1 && arr[i + 1] != 1) {
        arr[i] = 1;
        M--;
      }
      i++;
    }
  }
  if (M == 0) {
    console.log("Yes");
  } else {
    console.log("No");
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
