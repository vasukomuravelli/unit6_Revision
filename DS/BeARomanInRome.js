// Link : https://oj.masaischool.com/contest/3087/problem/03
function runProgram(input) {
  let N = +input;
  let obj = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };
  let arr = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  findRoman(arr, N, obj);
}
function findRoman(arr, N, obj) {
  let str = "";
  let i = arr.length;
  while (N > 0) {
    if (N > arr[i - 1]) {
      N = N - arr[i - 1];
      str += obj[arr[i - 1]];
    } else if (N < arr[i - 1]) {
      i--;
    } else {
      N = N - arr[i - 1];
      str += obj[arr[i - 1]];
      i--;
    }
  }
  console.log(str);
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
