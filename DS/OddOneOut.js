// Link : https://oj.masaischool.com/contest/3003/problem/01
function runProgram(input) {
  let arr = input.split(" ");
  if (arr[0] == arr[1]) {
    console.log(arr[2]);
  } else if (arr[1] == arr[2]) {
    console.log(arr[0]);
  } else if (arr[0] == arr[2]) {
    console.log(arr[1]);
  } else {
    console.log(0);
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
