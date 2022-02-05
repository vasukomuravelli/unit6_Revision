function runProgram(input) {
  input = input.split("\n");
  let mat = [];
  for (let i = 0; i < input.length; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }
  //   RotateCW(mat);
  RotateACW(mat);
}
function RotateCW(mat) {
  N = mat.length;
  for (let i = 0; i < Math.floor(N / 2); i++) {
    for (let j = i; j < N - i - 1; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[N - j - 1][i];
      mat[N - j - 1][i] = mat[N - i - 1][N - j - 1];
      mat[N - i - 1][N - j - 1] = mat[j][N - i - 1];
      mat[j][N - i - 1] = temp;
    }
  }
  console.log(mat);
}
function RotateACW(mat) {
  N = mat.length;
  for (let i = 0; i < Math.floor(N / 2); i++) {
    for (let j = i; j < N - i - 1; j++) {
      let temp = mat[i][j];
      mat[i][j] = mat[j][N - i - 1];
      mat[j][N - i - 1] = mat[N - i - 1][N - j - 1];
      mat[N - i - 1][N - j - 1] = mat[N - j - 1][i];
      mat[N - j - 1][i] = temp;
    }
  }
  console.log(mat);
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`1 2 3 4
  5 6 7 8
  9 10 11 12
  13 14 15 16`);
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
