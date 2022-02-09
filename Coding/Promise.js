function outer(time) {
  return new Promise((resolve, reject) => {
    if (typeof time !== "number") {
      return reject("Type of time should be of number");
    }
    setTimeout(() => {
      resolve("given time delay is done");
    }, 2000);
  });
}

// outer(2000)
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

async function result() {
  try {
    let x = await outer("2000");
    console.log(x);
  } catch (e) {
    console.log("e", e);
  }
}

result();
