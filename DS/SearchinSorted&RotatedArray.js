function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let index = Findmax(N, arr);
  let high = search(arr, 0, index, K);
  let low = search(arr, index + 1, N - 1, K);
  if (low == -1 && high == -1) {
    console.log(-1);
  } else if (low == -1) {
    console.log(high);
  } else {
    console.log(low);
  }
}
function Findmax(N, arr) {
  let low = 0;
  let high = N - 1;
  let pivot = arr[0];
  let ans = -1;
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
function search(arr, low, high, K) {
  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (arr[mid] == K) {
      return mid;
    } else if (arr[mid] > K) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return -1;
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`7 6
    4 5 6 7 0 1 2`);
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
