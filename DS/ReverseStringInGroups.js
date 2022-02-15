// Link : https://oj.masaischool.com/contest/3087/problem/06
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let K = +input[line++];
    let str = input[line++].trim();
    ReverseString(K, str);
  }
}
function ReverseString(K, str) {
  if (K > str.length) {
    console.log(str.split("").reverse().join(""));
  } else {
    let N = Math.ceil(str.length / K);
    let st = "";
    for (let i = 0; i < N; i++) {
      if (i % 2 == 1) {
        for (let j = i * K; j < i * K + K; j++) {
          if (str[j] == undefined) {
            break;
          }
          st += str[j];
        }
      } else {
        for (let j = i * K + K - 1; j >= i * K; j--) {
          if (str[j] == undefined) {
            continue;
          }
          st += str[j];
        }
      }
    }
    console.log(st);
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
