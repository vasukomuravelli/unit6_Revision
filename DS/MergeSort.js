function runProgram(input) {
  input = input.split("\n");
  let N = +input[0];
  let arr = input[1].trim().split(" ").map(Number);
  MergeSort(N, arr, 0, N - 1);
  console.log(arr.join(" "));
}
function MergeSort(N, arr, low, high) {
  if (low < high) {
    let mid = Math.floor((low + high) / 2);
    MergeSort(N, arr, low, mid);
    MergeSort(N, arr, mid + 1, high);
    Merge(arr, low, mid, high);
  } else {
    return;
  }
}
function Merge(arr, low, mid, high) {
  let arr1 = arr.slice(low, mid + 1);
  let arr2 = arr.slice(mid + 1, high + 1);
  let i = 0;
  let j = 0;
  let arr3 = [];
  while (i < arr1.length || j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else if (arr1[i] > arr2[j]) {
      arr3.push(arr2[j]);
      j++;
    } else if (arr1[i] == undefined) {
      arr3.push(arr2[j]);
      j++;
    } else if (arr2[j] == undefined) {
      arr3.push(arr1[i]);
      i++;
    }
  }
  //   console.log(arr3, low);
  for (let k = 0; k < arr3.length; k++) {
    arr[low] = arr3[k];
    low++;
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5
   7 5 0 3 1`);
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
