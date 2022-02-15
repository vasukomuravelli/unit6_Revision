// Link : https://oj.masaischool.com/contest/2103/problem/04
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let callArr = input[1].trim().split(" ");
  let exeArr = input[2].trim().split(" ");
  Ordering(N, callArr, exeArr);
}
function Ordering(N, callArr, exeArr) {
  let count = 0;
  var i = 0;
  while (callArr.length > 0) {
    if (callArr[i] == exeArr[i]) {
      callArr.shift();
      exeArr.shift();
      count++;
    }
    if (callArr[i] != exeArr[i]) {
      var x = callArr.shift();
      callArr.push(x);
      count++;
      //   console.log(count, callArr );
    }
  }
  console.log(count);
}
if (process.env.USERNAME === "") {
  runProgram(``);
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
