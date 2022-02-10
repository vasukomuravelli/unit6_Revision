function runProgram(input) {
  input = input.split("\n");
  let query = +input[0];
  let line = 1;
  for (let i = 0; i < query; i++) {
    let [op, value] = input[line++].trim().split(" ").map(Number);
    S2Q(op, value);
  }
}
let queue1 = [];
let queue2 = [];
function S2Q(op, value) {
  // Expensive Push operation
  // if (op === 1) {
  //   queue2.push(value);
  //   while (queue1.length) {
  //     queue2.push(queue1.shift());
  //   }
  //   let temp = queue1;
  //   queue1 = queue2;
  //   queue2 = temp;
  // } else {
  //   if (queue1.length) {
  //     console.log(queue1.shift());
  //   } else {
  //     console.log(-1);
  //   }
  // }
  //Expensive Pop operation
  if (op == 1) {
    queue1.push(value);
  } else {
    if (queue1.length) {
      while (queue1.length > 1) {
        queue2.push(queue1.shift());
      }
      console.log(queue1.shift());
      let temp = queue2;
      queue2 = queue1;
      queue1 = temp;
    } else {
      console.log(-1);
    }
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`11
    1 2
    1 3
    2
    1 4
    1 8
    1 26
    2
    2
    2
    2
    2`);
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
