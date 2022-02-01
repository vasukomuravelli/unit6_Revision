function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  console.log(QuickSort(arr).join(" "));
  //   console.log(arr.join(" "));
}
function QuickSort(arr) {
  if (arr.length == 1) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  //   console.log(pivot);
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  //   console.log(leftArr, rightArr);
  if (leftArr.length > 0 && rightArr.length > 0) {
    return [...QuickSort(leftArr), pivot, ...QuickSort(rightArr)];
  } else if (leftArr.length > 0) {
    return [...QuickSort(leftArr), pivot];
  } else {
    return [pivot, ...QuickSort(rightArr)];
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`6
      2 6 3 0 4 1`);
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
