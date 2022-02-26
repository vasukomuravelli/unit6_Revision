function LargestSubString(string, pre, suf) {
  let maxp = 0;
  let maxs = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      let str = "";
      for (let k = i; k < j; k++) {
        str += string[k];
      }
      console.log(str);
    }
  }
}

LargestSubString("engine", "raven", "ginkgo");
