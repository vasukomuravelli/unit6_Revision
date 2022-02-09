// Link : https://oj.masaischool.com/contest/2944/problem/01
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = [];
  for (let i = 1; i <= N; i++) {
    let row = input[i].trim().split(" ").map(Number);
    arr.push(row);
  }
  RotateElements(N, arr);
  for (let i = 0; i < N; i++) {
    console.log(arr[i].join(" "));
  }
}
function RotateElements(N, arr) {
  let top = 0;
  let bottom = N - 1;
  let left = 0;
  let right = N - 1;
  while (top < bottom && left < right) {
    let temp = arr[top + 1][left];
    for (let i = left; i <= right; i++) {
      let temp1 = arr[top][i];
      arr[top][i] = temp;
      temp = temp1;
    }
    top++;
    for (let i = top; i <= bottom; i++) {
      let temp1 = arr[i][right];
      arr[i][right] = temp;
      temp = temp1;
    }
    right--;
    for (let i = right; i >= left; i--) {
      let temp1 = arr[bottom][i];
      arr[bottom][i] = temp;
      temp = temp1;
    }
    bottom--;
    for (let i = bottom; i >= top; i--) {
      let temp1 = arr[i][left];
      arr[i][left] = temp;
      temp = temp1;
    }
    left++;
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(``);
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
