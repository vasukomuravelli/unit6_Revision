function outer() {
  let a = 10;

  return function inner(b) {
    return a + b;
  };
}
let fn = outer();
console.log(fn(5));

function calculate(initialValue = 0) {
  let value = initialValue;
  function add(val) {
    value = value + val;
    return value;
  }
  return { add };
}

let cal = calculate();
console.log(cal.add(20));

function toggler() {
  var arr = arguments;
  console.log(arr);
  var index = -1;
  return function () {
    index++;
    if (index >= arr.length) {
      index = 0;
    }
    return arr[index];
  };
}

const toggle = toggler(1, 2, 3);
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());
console.log(toggle());

// const arr = [1, 2, 3];

// for (var i = 0; i < arr.length; i++) {
//   setTimeout(() => {
//     console.log(i, arr[i]);
//   }, i * 1000);
// }

var array = [1, 2, 3];

function display(i) {
  //   var that = this;
  setTimeout(
    // function () {
    //   console.log(i, this[i]);
    // }.bind(this),
    // i * 1000
    // () => {
    //   console.log(i, this[i]);
    // },
    // i * 1000
    function () {
      //   console.log(i, that[i]);
    },
    console.log(this, "this"),
    i * 1000
  );
}

for (let i = 0; i < array.length; i++) {
  display.call(array, i);
}

//Throttling : guarantees the callback to be called at every n delay; network requests done during this period are ignored.

let c = 0;
function throttler(fn, wait) {
  let lastcall = 0;
  return function () {
    // we need to have present time and the last callback time was made
    console.log(c++);
    if (Date.now() - lastcall >= wait) {
      lastcall = Date.now();
      fn.apply(this, arguments);
    }
  };
}
