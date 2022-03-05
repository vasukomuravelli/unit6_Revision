function createobj(name, age) {
  this.name = name;
  this.age = age;
}

let a = new createobj("a", 1);
let b = new createobj("b", 2);
let c = new createobj("c", 3);

let person = {
  city: "warangal",
};

createobj.call(person, "vasu", 26);

let obj = {
  name: "Keshav",
  age: 26,
};

obj.prototype.consfn = function () {
  console.log("name", this.name);
};

console.log(obj);

// console.log(a, b, c);
