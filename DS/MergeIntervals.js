function runProgram(input) {
  // Write code here
  let arr = input;
  arr = arr.sort((a, b) => a[0] - b[0]);
  let ans = [arr[0]];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] <= ans[ans.length - 1][1]) {
      ans[ans.length - 1][1] = Math.max(arr[i][1], ans[ans.length - 1][1]);
    } else {
      ans.push(arr[i]);
    }
  }
  console.log(ans);
}
if (process.env.USERNAME === "vasuk") {
  runProgram([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ]);
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
