// Link : https://oj.masaischool.com/contest/3154/problem/04
function powerOf4(num) {
  let res = num;
  for (let i = 0; i < 3; i++) {
    res *= num;
  }
  console.log(res);
}
