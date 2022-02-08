function runProgram(input) {
  let arr = input.trim().split(" ").map(Number);
  console.log(PeakElements(arr)); //BruteForce
  console.log(PeekElements(arr)); //BinaySearch
}
function PeakElements(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }
  }
}
function PeekElements(arr) {
  let low = 0;
  let high = arr.length - 1;
  let pivot = arr[0];
  ans = -1;
  while (low < high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] > pivot) {
      pivot = arr[mid];
      low = mid;
      ans = mid;
    } else {
      high = mid - 1;
    }
  }
  return ans;
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`2 3 5 8 1 1 2`);
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
