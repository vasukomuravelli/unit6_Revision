function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  Minimum(N, arr);
}
function Minimum(N, arr) {
  let low = 0;
  let high = N - 1;
  let min = arr[0];
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] >= min) {
      min = arr[mid];
      low = mid + 1;
      ans = mid;
    } else {
      high = mid - 1;
    }
  }
  //   console.log(ans);
  if (ans === arr.length - 1) {
    console.log(arr[0]);
  } else {
    console.log(arr[ans + 1]);
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`4
     3 5 7 2`);
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
