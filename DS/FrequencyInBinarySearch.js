function runProgram(input) {
  input = input.split("\n");
  let [N, target] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(",").map(Number);
  let lower = Frequency(N, arr, target, true);
  let upper = Frequency(N, arr, target, false);
  if (upper == -1 && lower == -1) {
    console.log(-1);
  } else {
    console.log(upper - lower + 1);
  }
}
function Frequency(N, arr, target, flag) {
  let low = 0;
  let high = N - 1;
  let ans = -1;
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] === target) {
      ans = mid;
      if (flag) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`10 26
  1,3,3,4,5,6,7,7,8,9`);
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
