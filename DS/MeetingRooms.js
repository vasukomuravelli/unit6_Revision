function runProgram(input) {
  input = input.split("\n");
  let start = input[0].trim().split(",").map(Number);
  let end = input[1].trim().split(",").map(Number);
  console.log(start, end);
  MeetingRooms(start, end);
}
function MeetingRooms(start, end) {
  let flag = false;
  for (let i = 0; i < start.length; i++) {
    if (start[i + 1] < end[i]) {
      flag = true;
    }
  }
  if (flag) {
    console.log("Not Possible");
  } else {
    console.log("Possible");
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`0,31,45
  30,35,60`);
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
