// function sleep() {
//   for (let i = 1; i <= 3; i++)
//     (async (i) => await setTimeout(() => console.log(i), 1000 * i))(i);
// }

// sleep();

// [1, 2, 3].forEach((i) => setTimeout(() => console.log(i), 1000 * i));

// for value of y
// mutation {
//     changeX(newX:"WW1GelpUWTBJR2x6SUc1dmRDQmxibU55ZVhCMGFXOXU=")
//   }

// For the value of z
const str = "abcdefghijklmnopqrstuvwxyz";
const md5 = require("md5");
for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < str.length; k++) {
      for (let N = 0; N < str.length; N++) {
        if ((md5(str[i] + str[j] + str[k] + str[N]) + "").includes("10f4a7")) {
          console.log(str[i] + str[j] + str[k] + str[N]);
        }
      }
    }
  }
}
