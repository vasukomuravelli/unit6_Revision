//Link :  https://oj.masaischool.com/contest/3142/problem/04
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  FindTheSum(N, arr);
}
function FindTheSum(N, arr) {
  let arr1 = findGreaterLeft(N, arr);
  let arr2 = findGreaterRight(N, arr);
  //   console.log(arr1,arr2);
  let ans = [];
  for (let i = 0; i < N; i++) {
    ans.push(arr1[i] + arr2[i]);
  }
  console.log(ans.join(" "));
}
function findGreaterLeft(N, arr) {
  let stack = [];
  let ans = [];
  for (let i = 0; i < N; i++) {
    while (stack.length > 0 && arr[peek(stack)] <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = peek(stack) + 1;
    }
    stack.push(i);
  }
  return ans;
}

function findGreaterRight(N, arr) {
  let stack = [];
  let ans = [];
  for (let i = N - 1; i >= 0; i--) {
    while (stack.length > 0 && arr[peek(stack)] <= arr[i]) {
      stack.pop();
    }
    if (stack.length == 0) {
      ans[i] = -1;
    } else {
      ans[i] = peek(stack) + 1;
    }
    stack.push(i);
  }
  return ans;
}

function peek(a) {
  return a[a.length - 1];
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
