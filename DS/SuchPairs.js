function runProgram(input) {
  input = input.trim().split("\n");
  var no_items = Number(input[0][0]);

  var reqSum = input[0].split(" ");
  reqSum = Number(reqSum[1]);

  var arr = input[1].trim().split(" ").map(Number);
  console.log(arr);
  var count = 0;
  let i = 0;
  let j = no_items - 1;
  for (var i = 0; i < no_items; i++) {
    for (var j = i + 1; j <= no_items; j++) {
      tempSum = 0;
      tempSum = Number(arr[i]) + Number(arr[j]);
      // console.log(tempSum)
      if (tempSum == reqSum) {
        count++;
      }
    }
  }
  //   while (i < j) {
  //     console.log(arr[i], arr[j]);
  //     if (arr[i] + arr[j] < reqSum) {
  //       i++;
  //     } else if (arr[i] + arr[j] > reqSum) {
  //       j--;
  //     } else if (arr[i] + arr[j] === reqSum) {
  //       // console.log("check")
  //       count++;
  //       j--;
  //     }
  //   }
  console.log(count);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`5 0
    -1 1 -1 1 -1`);
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
