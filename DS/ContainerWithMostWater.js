function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  container(N, arr);
}
function container(N, arr) {
  let i = 0;
  let j = N - 1;
  let max = -1;
  while (i < j) {
    let sum = Math.min(arr[i], arr[j]) * (j - i);
    if (max < sum) {
      max = sum;
    }
    if (arr[i] < arr[j]) {
      i++;
    } else {
      j--;
    }
  }
  console.log(max);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`9
  1 8 6 2 5 4 8 3 7`);
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
