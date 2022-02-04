// Link : https://oj.masaischool.com/contest/2983/problem/03
function detectPalII(N, string) {
  if (N % 2 == 0) {
    let obj = {};
    for (let i = 0; i < N; i++) {
      obj[string[i]] == undefined ? (obj[string[i]] = 1) : obj[string[i]]++;
    }
    let count = 0;
    for (let keys in obj) {
      if (obj[keys] == 2) {
        count++;
      }
    }
    count == N / 2 ? console.log("Possible!") : console.log("Not Possible!");
  } else {
    let obj = {};
    for (let i = 0; i < N; i++) {
      obj[string[i]] == undefined ? (obj[string[i]] = 1) : obj[string[i]]++;
    }
    let count = 0;
    for (let keys in obj) {
      if (obj[keys] % 2 == 1) {
        count++;
      }
    }
    count == 1 ? console.log("Possible!") : console.log("Not Possible!");
  }
}
