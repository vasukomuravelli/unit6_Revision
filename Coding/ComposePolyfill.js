const add = (a) => {
  return a + 5;
};
const subtract = (a) => {
  return a - 2;
};
const multiply = (a) => {
  return a * 4;
};

const compose = (...functions) => {
  return (args) => {
    return functions.reduceRight((arg, fn) => fn(arg), args);
  };
};

const pipe = (...functions) => {
  return (args) => {
    return functions.reduce((arg, fn) => fn(arg), args);
  };
};

const evaluate = compose(add, subtract, multiply); // Works as compose inbuilt function right to left

console.log(evaluate(5));

const ans = pipe(add, subtract, multiply); //works as pipe inbuilt function left to right

console.log(ans(5));

// Map Polyfill

let arr = ["1", "2", "3", "4", "5"];

let newArr = [];

for (let i = 0; i < arr.length; i++) {
  newArr.push(Number(arr[i]));
}

console.log(newArr);

// Filter Polyfill

let arr1 = [1, 2, 3, 4, 5];

let EvenArr = [];

for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] % 2 == 0) {
    EvenArr.push(arr1[i]);
  }
}

Array.prototype.myMap = function (callback) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(callback(this[i]));
  }
  return res;
};

// Array.prototype.filter = function (callback) {
//   let res = [];
//   for (let i = 0; i < this.length; i++) {
//     res.push()
//   }
// }

const array = ["1", "2", "3", "4"].myMap((e) => e > 5);

console.log(array);

console.log(EvenArr);
