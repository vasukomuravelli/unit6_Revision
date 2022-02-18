// Link : https://oj.masaischool.com/contest/3116/problem/02
function runProgram(input) {
  input = input.split("\n");
  let str1 = input[0].trim().split("");
  let str2 = input[1].trim().split("");
  let obj = {};
  let flag = false;
  for (let i = 0; i < str1.length; i++) {
    if (obj[str1[i]] == undefined) {
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]]++;
    }
  }
  for (let i = 0; i < str2.length; i++) {
    if (obj[str2[i]] == undefined) {
      flag = true;
      break;
    } else {
      obj[str2[i]]--;
    }
  }
  if (flag) {
    console.log("No");
  } else {
    for (let key in obj) {
      if (obj[key] == 1) {
        flag = true;
        break;
      }
    }
    if (flag) {
      console.log("No");
    } else {
      console.log("Yes");
    }
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
