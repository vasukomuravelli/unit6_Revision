function outer() {
  var a = 10;
  return function (b) {
    return a + b;
  };
}

let fn = outer();

console.log(fn(5));

// Infinite currying

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(1)(2)(3)(4)());

let cal = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  divison(a) {
    this.total /= a;
    return this;
  },
};

const calculate = cal.add(1).multiply(4).subtract(2).add(20).divison(11);

console.log(calculate.total);

// function callApi() {
//   console.log("Here's the data");
// }

// function debounce(fn, time) {
//   let delay;
//   console.log("clicked");
//   if (delay) {
//     clearTimeout(delay);
//   }
//   delay = setTimeout(() => {
//     fn();
//   }, time);
// }
