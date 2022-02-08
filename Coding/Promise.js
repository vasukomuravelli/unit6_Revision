function outer(time) {
  return new Promise((resolve, reject) => {
    // function setDelay(time) {
    setTimeout(() => {
      if (typeof time === "number") resolve("Given time delay is done");
      else {
        reject("Incorrect type of time");
      }
    }, time);
    // }
    // setDelay(time);
  });
}
outer(3000)
  .then((res) => console.log(res))
  .catch((err) => console.log("err:", err));
// console.log(promise);

function hello() {
  console.log("hello from promise.js");
}
