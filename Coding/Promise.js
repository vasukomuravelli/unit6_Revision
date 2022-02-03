function outer() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Given time delay is done");
    }, 3000);
  });
}
outer()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
// console.log(promise);
