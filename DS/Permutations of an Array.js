function runProgram(input) {
  let arr = input.split(" ").map(Number);
  generatePermutations(arr, 0);
}
function generatePermutations(arr, curr) {
  if (curr == arr.length) {
    console.log(arr.join(" "));
    return;
  }
  if (curr > arr.length) {
    return;
  }
  for (let i = curr; i < arr.length; i++) {
    [arr[i], arr[curr]] = [arr[curr], arr[i]];
    generatePermutations(arr, curr + 1);
    [arr[i], arr[curr]] = [arr[curr], arr[i]];
    // [arr[curr], arr[i]] = [arr[i], arr[curr]];
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`0 1 2`);
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
