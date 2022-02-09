const arr = ["vasu", 26, "warangal", 506002];

const nums = [3, 9, 27, 35, 11];

arr.forEach((r) => console.log(r));

let ans = arr.filter((e) => {
  if (typeof e === "string") {
    return e;
  }
});

console.log(ans);

let newnum = nums.map((e) => {
  return e + 10;
});

console.log(newnum);

let value = nums.reduce((acc, curr) => {
  return acc + curr;
});

console.log(value);
