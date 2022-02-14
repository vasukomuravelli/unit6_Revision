// Link : https://oj.masaischool.com/contest/3073/problem/03
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let str = input[1].trim().split("");
  let x = 0;
  let y = 0;
  for (let i = 0; i < N; i++) {
    if (str[i] == "l") {
      y -= 1;
    }
    if (str[i] == "r") {
      y += 1;
    }
    if (str[i] == "u") {
      x += 1;
    }
    if (str[i] == "d") {
      x -= 1;
    }
  }
  console.log(x, y);
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
