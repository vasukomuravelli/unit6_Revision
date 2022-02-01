function runProgram(input) {
  let exp = input;
  let stack = [];
  let str = "";
  for (let i = 0; i < exp.length; i++) {
    if (exp[i].match(/[a-z]/i)) {
      str += exp[i];
    } else if (exp[i] == ")") {
      console.log("i", i);
      if (stack.length == 0) {
        return false;
      } else {
        while (peek(stack) != "(" && stack.length > 0) {
          str += stack.pop();
        }
      }
    } else {
      stack.push(exp[i]);
    }
  }
  while (stack.length > 0) {
    str += stack.pop();
  }
  console.log(str);
}
function peek(a) {
  return a[a.length - 1];
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`A+B*C/(E-F)`);
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
