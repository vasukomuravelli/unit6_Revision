// Link :https://oj.masaischool.com/contest/2983/problem/01
function runProgram(input) {
  input = input.split("\n");
  let tc = +input[0];
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [N, K] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(DivisibleByK(N, K, arr));
  }
}
function DivisibleByK(N, k, arr) {
  let sum = arr.reduce((a, b) => {
    return a + b;
  });
  if (sum % k == 0) {
    return 0;
  } else {
    let mod_arr = new Array(N);
    let obj = {};
    obj[0] = -1;
    let target_remainder = sum % k;
    let curr_remainder = 0;
    let res = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < N; i++) {
      curr_remainder = (curr_remainder + arr[i]) % k;
      obj[curr_remainder] = i;
      let mod = (curr_remainder - target_remainder + k) % k;

      if (obj[mod] != undefined) {
        res = Math.min(res, i - obj[mod]);
      }
    }
    console.log(obj);
    if (res == Number.MAX_SAFE_INTEGER || res == N) {
      res = -1;
    }
    return res;
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
