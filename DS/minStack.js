function runProgram(input) {
  input = input.split("\n");
  // Space complexity : 1;
  // let stack = [];
  // let min = [];
  // for (let i = 0; i < input.length; i++) {
  //   let [op, value] = input[i].trim().split(" ");
  //   if (op == "push") {
  //     stack.push(+value);
  //     if (min.length == 0) {
  //       min.push(+value);
  //     } else if (peek(min) > +value) {
  //       min.push(+value);
  //     }
  //   } else if (op == "pop()") {
  //     let x = stack.pop();
  //     if (x == peek(min)) {
  //       min.pop();
  //     }
  //   } else if (op == "getMin()") {
  //     console.log(peek(min));
  //   }
  // }
  //  With space complexity : 1
  // if(num < min) we just need to use the formula of 2A - B at push A => element to add into stack B => minimum push that 2A-B value into stack.
  //  At pop operation :  while pop we need to compare the peek with curr min then
  // if peek < curr min then the min will be found using the formula of 2A - B Now A => curr min & B  be peek(stack);
  let min;
  let stack = [];
  for (let i = 0; i < input.length; i++) {
    let [op, value] = input[i].trim().split(" ");
    if (op == "push") {
      if (stack.length == 0) {
        stack.push(+value);
        min = +value;
      } else {
        if (peek(stack) < +value) {
          stack.push(+value);
        } else {
          stack.push(2 * +value - min);
          min = +value;
        }
      }
    } else if (op == "pop()") {
      if (peek(stack) > min) {
        stack.pop();
      } else {
        min = 2 * min - peek(stack);
        stack.pop();
      }
    } else if (op == "getMin()") {
      console.log(min);
    }
  }
}
function peek(a) {
  return a[a.length - 1];
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`push 3
    push 5
    push 1
    getMin()
    pop()
    getMin()`);
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
