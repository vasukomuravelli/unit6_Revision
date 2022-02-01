function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  //   let obj = {};
  //   arr.forEach((e) => {
  //     if (obj[e] === undefined) {
  //       obj[e] = 1;
  //     } else {
  //       console.log(e);
  //       return;
  //     }
  //   });
  //   2nd method is find the sum of array(s1) and find the sum of first N-1 natural numbers(s2) using N*(N+1)/2 and the difference between s1 & s2 will be the answer.
  let sum = 0;
  arr.forEach((e) => {
    sum += e;
  });
  s2 = ((N - 1) * (N - 1 + 1)) / 2;
  console.log(Math.abs(sum - s2));
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5
  1 3 3 2 4 `);
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
