function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let N = +input[line++];
    let arr = input[line++].trim().split(" ").map(Number);
    let ans = new Array(N).fill(0).map(() => new Array(N).fill(0));
    SpiralsandDiagonals(N, arr, ans);
  }
}
function SpiralsandDiagonals(N, arr, ans) {
  let top = 0;
  let bottom = N - 1;
  let left = 0;
  let right = N - 1;
  let k = 0;
  while (k < arr.length) {
    for (let i = left; i <= right && k < arr.length; i++) {
      ans[top][i] = arr[k];
      k++;
    }
    top++;
    for (let i = top; i <= bottom && k < arr.length; i++) {
      ans[i][right] = arr[k];
      k++;
    }
    right--;
    for (let i = right; i >= left && k < arr.length; i--) {
      ans[bottom][i] = arr[k];
      k++;
    }
    bottom--;
    for (let i = bottom; i >= top && k < arr.length; i--) {
      ans[i][left] = arr[k];
      k++;
    }
    left++;
  }
  let sum = 0;
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i == j || i + j == N - 1) {
        sum = sum + ans[i][j];
      }
    }
  }
  console.log(sum);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5`);
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
