function runProgram(input) {
  let str1 = input;
  let str = "";
  for (let i = str1.length - 1; i >= 0; i--) {
    str += str1[i];
  }
  if (str === str1) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  //2nd method by two Pointers
  // consider left at 0 & right at str1.length - 1
  //if they differ return false or increment & decrement pointers at every iteration
  // After the loop finishes just console as yes
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`malayalam`);
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
