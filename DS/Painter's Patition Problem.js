function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, P] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(painter(N, P, arr));
  }
}
function painter(n, p, arr) {
  let low = Math.max(...arr);
  let high = 0;
  for (let i = 0; i < n; i++) {
    high += arr[i];
  }
  let ans = 0;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    let val = numOfPainter(arr, arr.length, mid);
    if (val > p) {
      low = mid + 1;
    } else {
      ans = mid;
      high = mid - 1;
    }
  }
  return ans;
}
function numOfPainter(arr, n, k) {
  let total = 0;
  let np = 1;
  for (let i = 0; i < n; i++) {
    total += arr[i];
    if (total > k) {
      total = arr[i];
      np++;
    }
  }
  return np;
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
