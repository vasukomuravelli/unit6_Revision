function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  SWMaximum(N, K, arr);
}
function SWMaximum(N, K, arr) {
  let str = "";
  let ans = [];
  let max = -1;
  for (let i = 0; i < K; i++) {
    ans.push(arr[i]);
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  str += max + " ";
  max = -1;
  for (let i = K; i < N; i++) {
    ans.shift();
    ans.push(arr[i]);
    max = Math.max(...ans);
    str += max + " ";
  }
  console.log(str.trim());
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`6 3
  1 2 3 1 4 5`);
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
