// Link : https://oj.masaischool.com/contest/3162/problem/03
function runProgram(input) {
  let str = input.trim();
  let obj = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  let res = [];
  Investigation(res, str, 0, obj, []);
  res.forEach((e) => {
    console.log(e);
  });
}
function Investigation(res, str, curr, obj, arr) {
  if (curr == str.length) {
    res.push(arr.join(""));
    return;
  }
  for (let i = 0; i < obj[str[curr]].length; i++) {
    arr.push(obj[str[curr]][i]);
    Investigation(res, str, curr + 1, obj, arr);
    arr.pop();
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
