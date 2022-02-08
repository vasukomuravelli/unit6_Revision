function runProgram(input) {
  let N = +input;
  let low = 0;
  let high = N;
  let ans = -1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (mid ** 2 >= N) {
      high = mid;
    } else {
      ans = mid;
      low = mid + 1;
    }
  }
  console.log(ans);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`11`);
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
