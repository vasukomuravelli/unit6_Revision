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

console.log(person);

// console.log(a, b, c);
