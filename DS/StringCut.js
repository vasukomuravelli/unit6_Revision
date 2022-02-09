// Link : https://oj.masaischool.com/contest/3032/problem/02
function runProgram(input) {
  let str = input;
  if (str.length % 2 == 0) {
    let str1 = str.slice(0, str.length / 2);
    let str2 = str.slice(str.length / 2, str.length);
    let rev1 = "";
    let rev2 = "";
    for (let i = str1.length - 1; i >= 0; i--) {
      rev1 += str1[i];
    }
    for (let i = str2.length - 1; i >= 0; i--) {
      rev2 += str2[i];
    }
    console.log(rev1 + rev2);
  } else {
    let str1 = str.slice(0, str.length / 2);
    let str2 = str.slice(str.length / 2 + 1, str.length);
    let rev1 = "";
    let rev2 = "";
    let midChar = str.slice(str.length / 2, str.length / 2 + 1);
    //   console.log(midChar);
    for (let i = str1.length - 1; i >= 0; i--) {
      rev1 += str1[i];
    }
    for (let i = str2.length - 1; i >= 0; i--) {
      rev2 += str2[i];
    }
    console.log(rev1 + midChar + rev2);
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
