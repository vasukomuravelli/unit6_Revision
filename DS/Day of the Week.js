// Link : https://oj.masaischool.com/contest/3162/problem/01
function dayOfTheWeek(day, N) {
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let x = days.indexOf(day);
  console.log(days[(x + N) % days.length]);
}
