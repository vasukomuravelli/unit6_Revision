function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(Twosum(N, K, arr));
}
function Twosum(N, K, arr) {
  let i = 0;
  let j = N - 1;
  while (i < j) {
    if (arr[i] + arr[j] == K) {
      return [i, j];
    } else if (arr[i] + arr[j] > K) {
      j--;
    } else {
      i++;
    }
  }
  return [-1, -1];
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`4 9
    2 7 11 15`);
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
