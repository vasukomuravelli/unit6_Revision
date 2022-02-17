// Link : https://www.hackerrank.com/contests/cohort-21-dsa-contest-i/challenges/making-anagrams/submissions/code/1341794200
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
 * Complete the 'makingAnagrams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

function makingAnagrams(s1, s2) {
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();
  let i = 0;
  let j = 0;
  let count = 0;
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        s1[i] = "#";
        s2[j] = "#";
        count++;
      }
    }
  }
  //     let str = s1.join('')+s2.join('');
  //     for(let i=0;i<str.length;i++){

  //     }
  return s1.length + s2.length - 2 * count;
}

function main() {
  const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

  const s1 = readLine();

  const s2 = readLine();

  const result = makingAnagrams(s1, s2);

  ws.write(result + "\n");

  ws.end();
}
