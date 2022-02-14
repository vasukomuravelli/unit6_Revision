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
