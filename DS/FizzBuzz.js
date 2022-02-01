function runProgram(input) {
  input = +input;
  str = "";
  for (let i = 1; i <= input; i++) {
    if (i % 5 == 0 && i % 3 == 0) {
      str += "FizzBuzz";
    } else if (i % 3 == 0) {
      str += "Fizz" + " ";
    } else if (i % 5 == 0) {
      str += "Buzz" + " ";
    } else {
      str += i + " ";
    }
  }
  console.log(str.trim());
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`15`);
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
