// Link : https://oj.masaischool.com/contest/3053/problem/04
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, M] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    sortAscend(arr, N);
    findDiff(arr, N, M);
  }
}
function findDiff(arr, N, M) {
  let sum1 = 0;
  for (let i = 0; i < N - M; i++) {
    sum1 += arr[i];
  }
  let sum2 = 0;
  let c = 0;
  for (let i = arr.length - 1; i >= 0 && c < N - M; i--) {
    sum2 += arr[i];
    c++;
  }
  //   console.log(sum1,sum2);
  console.log(sum2 - sum1);
}
function sortAscend(arr, N) {
  for (let i = 0; i < N; i++) {
    let min = i;
    for (let j = i + 1; j < N; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min != i) {
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }
  return arr;
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
