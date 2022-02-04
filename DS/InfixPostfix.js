function runProgram(input) {
  let exp = input;
  let stack = [];
  let str = "";
  for (let i = 0; i < exp.length; i++) {
    if (isChar(exp[i])) {
      str += exp[i];
    } else if (exp[i] == "(") {
      stack.push(exp[i]);
    } else if (exp[i] == ")") {
      while (stack.length > 0 && peek(stack) != "(") {
        str += stack.pop();
      }
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    } else {
      while (stack.length > 0 && priority(peek(stack)) >= priority(exp[i]))
        str += stack.pop();
      stack.push(exp[i]);
    }
  }
  while (stack.length > 0) {
    str += stack.pop();
  }
  console.log(str);
}
function priority(a) {
  if (a === "^") return 3;
  if (a === "*" || a === "/") return 2;
  if (a === "+" || a === "-") return 1;
  return -1;
}
function peek(a) {
  return a[a.length - 1];
}
function isChar(a) {
  if (a === "-" || a === "/" || a == "+" || a == "*" || a == "(" || a == ")")
    return false;
  else return true;
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
