function runProgram(input) {
  let [str1, str2] = input.split(" ");
  if (str1.length !== str2.length) {
    console.log("No");
  } else {
    let obj = {};
    for (let i = 0; i < str1.length; i++) {
      if (obj[str1[i]] === undefined) {
        obj[str1[i]] = 1;
      } else {
        obj[str1[i]]++;
      }
    }
    let flag = false;
    for (let i = 0; i < str2.length; i++) {
      if (obj[str2[i]] === undefined) {
        console.log("No");
        flag = true;
        break;
      } else {
        obj[str2[i]]--;
        if (obj[str2[i]] == 0) {
          delete obj[str2[i]];
        }
      }
    }
    if (Object.keys(obj).length === 0) {
      console.log("Yes");
    }
    //2nd method
    // Sort both the strings and compare (as str1===str2);
    // Time Complexity : NlogN space : 1
  }
}
if (process.env.USERNAME === "vasuk") {
  runProgram(`abcd abce`);
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
