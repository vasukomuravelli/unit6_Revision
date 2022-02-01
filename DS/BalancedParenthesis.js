function runProgram(input) {
  let str = input;
  let obj = {
    "{": "}",
    "[": "]",
    "(": ")",
  };
  let stack = [];
  let flag = false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "[" || str[i] === "(" || str[i] === "{") {
      stack.push(str[i]);
    } else {
      if (stack.length == 0) {
        console.log("No");
        flag = true;
        break;
      } else if (obj[peek(stack)] == str[i]) {
        stack.pop();
      } else {
        console.log("No");
        flag = true;
        break;
      }
    }
  }
  if (stack.length === 0) {
    console.log("Yes");
  } else if (!flag) {
    console.log("No");
  }
}
function peek(a) {
  return a[a.length - 1];
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`[()]`);
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
