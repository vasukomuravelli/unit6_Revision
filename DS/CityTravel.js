function runProgram(input) {
  input = input.split("\n");
  let [N, X, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  CityTravel(N, X, K, arr);
}
function CityTravel(N, X, K, arr) {
  let i = 0;
  while (K > 0 && i < N - 1) {
    if (arr[i + 1] - arr[i] <= X) {
      X -= arr[i + 1] - arr[i];
    } else {
      K--;
    }
    i++;
  }
  console.log(i + 1);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`3 2 1
0 2 10`);
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
