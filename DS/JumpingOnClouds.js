// Link : https://www.hackerrank.com/contests/cohort-21-dsa-contest-i/challenges/jumping-on-the-clouds/submissions/code/1341792973

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
 * Complete the 'jumpingOnClouds' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY c as parameter.
 */

function jumpingOnClouds(c) {
  let i = 0;
  let steps = 0;
  while (i < c.length - 1) {
    if (c[i + 2] == 1) {
      i++;
    } else {
      i += 2;
    }
    steps++;
  }
  return steps;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const n = parseInt(readLine().trim(), 10);

  const c = readLine()
    .replace(/\s+$/g, "")
    .split(" ")
    .map((cTemp) => parseInt(cTemp, 10));

  const result = jumpingOnClouds(c);

  ws.write(result + "\n");

  ws.end();
}
