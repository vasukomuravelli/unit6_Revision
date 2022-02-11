// Link : https://oj.masaischool.com/contest/3053/problem/03
function runProgram(input) {
  input = input.split("\n");
  let str1 = input[0].trim();
  let str2 = input[1].trim();
  let i = 0;
  while (i < str1.length) {
    if (str1[i] == str2[i]) {
      i++;
    } else {
      break;
    }
  }
  console.log(str1[i]);
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
