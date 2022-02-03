function runProgram(input) {
  let arr = input.split(" ").map(Number);
  count0 = 0;
  count1 = 0;
  count2 = 0;
  //   console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 0) {
      count0++;
    } else if (arr[i] == 1) {
      count1++;
    } else if (arr[i] == 2) {
      count2++;
    }
  }
  let str = "";
  while (count0 > 0) {
    str += 0 + " ";
    count0--;
  }
  while (count1 > 0) {
    str += 1 + " ";
    count1--;
  }
  while (count2 > 0) {
    str += 2 + " ";
    count2--;
  }
  console.log(str.trim());
}
if (process.env.USERNAME === "vasuk") {
  runProgram("0 1 2 0 1 2");
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
