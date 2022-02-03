// let person = {
//     name: "John",
//     myFunction: function () {
//       console.log("name", person.name);
//     },
//   };

// Writing as shown above is tough for different objects(always changing the names of the owner in the myFunction log). To avoid this we implement "this" keyword which will
// points to the owner variable directly.

// let person = {
//   name: "John",
//   myFunction: function () {
//     console.log("name", this.name); // this refers to owner object i.e., person
//   },
// };

// person.myFunction();

// Instead of writing function in each and every object we define object globally and call that function onto that object using keyword "Call" as shown below.

let person = {
  name: "John",
};

let person2 = {
  name: "Chandler",
};

function Myname(m, c) {
  this.age = m;
  this.city = c;
  console.log(this); // this refers to global object.
}
// Call, apply bind sets the new value of this to the function or the method.
// Myname.call(person2, 21, "Warangal"); // using the call keyword this will be pointing to the object that is called inside the function.
// We can also add other properties to ths object. For call we can directly send many parameters.
// Myname.apply(person2, [21, "Warangal"]); //The only difference between call & apply is we need to pass extra argumenys as array.
let x = Myname.bind(person2, 21, "Warangal"); // Here the Bind keyword doesnot allow the function to call itself. we need to store that binded value onto a variable
// on calling that variable it will execute.
x();
// console.log(person2);

// function Player(n, t) {
//   this.name = n; // this refers to the myPlayer with the help of new keyword.
//   this.team = t;
// }

// var myPlayer = new Player("messi", "barcelone");

// console.log("myPlayer", myPlayer);
