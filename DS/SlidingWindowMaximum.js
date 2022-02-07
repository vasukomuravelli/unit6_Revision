function runProgram(input) {
  input = input.split("\n");
  let [N, K] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  console.log(SWMaximum(N, K, arr));
}
function SWMaximum(N, K, arr) {
  const result = [];
  const que = [];
  if (N < K) {
    return null;
  }

  for (let i = 0; i < K; i++) {
    while (que.length > 0 && arr[i] >= arr[que[que.length - 1]]) {
      que.pop();
    }
    que.push(i);
    console.log(que);
  }

  result.push(arr[que[0]]);

  for (let i = K; i < N; i++) {
    while (que.length > 0 && arr[i] >= arr[que[que.length - 1]]) {
      que.pop();
    }

    if (que.length > 0 && que[0] <= i - K) {
      que.shift();
    }
    que.push(i);
    result.push(arr[que[0]]);
  }
  return result;
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`6 3
  1 2 3 1 4 5`);
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
