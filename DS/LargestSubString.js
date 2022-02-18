// LargestSubString which doesn't contain any repeated characters.

let s = "aabcbdef";

function LargestSubString(s) {
  let maxlen = 0;
  let start = 0;
  let HM = {};
  for (let i = 0; i < s.length; i++) {
    if (HM[s[i]] !== undefined) {
      start = Math.max(start, HM[s[i]] + 1);
      HM[s[i]] = i;
    }
    if (HM[s[i]] === undefined) {
      HM[s[i]] = i;
    }
    maxlen = Math.max(maxlen, i - start + 1);
  }
  console.log(maxlen);
}

LargestSubString(s);
