function runProgram(input) {
  let [N1, N2] = input.split(" ").map(Number);
  let a = Math.min(N1, N2);
  let b = Math.max(N1, N2);
  GCD(N1, N2);
  console.log(GCDrec(a, b));
}
function GCD(N1, N2) {
  // BruteForce
  let gcd = 0;
  for (let i = 1; i <= Math.min(N1, N2); i++) {
    if (N1 % i == 0 && N2 % i == 0) {
      gcd = i;
    }
  }
  console.log(gcd);
}
// Recursion
function GCDrec(a, b) {
  if (a == 0) {
    return b;
  }
  return GCDrec(b % a, a);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`7 35`);
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
