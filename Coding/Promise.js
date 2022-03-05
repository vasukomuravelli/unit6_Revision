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

function customFlattenobj(obj) {
  let newArr = [];
  for (let k in obj) {
    if (typeof obj[k] === "object") {
      newArr = [...newArr, ...customFlattenobj(obj[k])];
    } else {
      newArr.push(obj[k]);
    }
  }
  return newArr;
}

let obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
    e: 4,
  },
};

console.log(customFlattenobj(obj));

// function customArrayFlat(arr, depth = 1) {
//   let res = [];
//   arr.forEach((ar) => {
//     if (Array.isArray(ar) && depth > 0) {
//       res.push(...customArrayFlat(ar, depth - 1));
//     } else {
//       res.push(ar);
//     }
//   });
//   return res;
// }
// let arr = [
//   [1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [9, 10, 11],
// ];
// console.log(customArrayFlat(arr));
