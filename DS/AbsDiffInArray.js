// https://www.hackerrank.com/contests/cohort-21-dsa-contest-i/challenges/minimum-absolute-difference-in-an-array/submissions/code/1341791418
"use strict";

const fs = require("fs");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString = "";
let currentLine = 0;

process.stdin.on("data", function (inputStdin) {
  inputString += inputStdin;
});

process.stdin.on("end", function () {
  inputString = inputString.split("\n");

  main();
});

function readLine() {
  return inputString[currentLine++];
}

/*
 * Complete the 'minimumAbsoluteDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function minimumAbsoluteDifference(arr) {
  arr = arr.sort((a, b) => a - b);
  let min = Number.MAX_VALUE;
  for (let i = 0; i < arr.length; i++) {
    if (min > Math.abs(arr[i] - arr[i + 1])) {
      min = Math.abs(arr[i] - arr[i + 1]);
    }
  }
  return min;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const arr = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = minimumAbsoluteDifference(arr);

  ws.write(result + "\n");

  ws.end();
}
