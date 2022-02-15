// Link : https://oj.masaischool.com/contest/3087/problem/05
function runProgram(input) {
  let str = input.trim();
  let stack = [];
  let obj = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "{" || str[i] == "[") {
      stack.push(str[i]);
    } else if (str[i] == ")" || str[i] == "}" || str[i] == "]") {
      if (stack.length == 0) {
        flag = true;
        break;
      } else {
        if (obj[peek(stack)] == str[i]) {
          stack.pop();
        } else {
          flag = true;
          break;
        }
      }
    }
  }
  if (stack.length == 0 && !flag) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}
function peek(a) {
  return a[a.length - 1];
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
