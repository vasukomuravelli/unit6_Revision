// Link : https://oj.masaischool.com/contest/3116/problem/01
function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  let flag = false;
  for (let i = 0; i < N; i++) {
    if (arr[i] > arr[i + 1]) {
      flag = true;
    }
  }
  if (flag) {
    console.log(QuickSort(arr).join(" "));
  } else {
    console.log(arr.reverse().join(" "));
  }
}
function QuickSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let RightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      leftArr.push(arr[i]);
    } else {
      RightArr.push(arr[i]);
    }
  }
  if (leftArr.length > 0 && RightArr.length > 0) {
    return [...QuickSort(leftArr), pivot, ...QuickSort(RightArr)];
  } else if (leftArr.length > 0) {
    return [...QuickSort(leftArr), pivot];
  } else {
    return [pivot, ...QuickSort(RightArr)];
  }
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
