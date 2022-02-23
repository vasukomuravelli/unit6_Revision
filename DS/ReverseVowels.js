function ReverseVowels(str) {
  let vowels = [];
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "e" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "O" ||
      str[i] == "U" ||
      str[i] == "I"
    ) {
      vowels.push(str[i]);
    }
  }

  let ans = "";

  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "e" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "O" ||
      str[i] == "U" ||
      str[i] == "I"
    ) {
      ans += vowels.pop();
    } else {
      ans += str[i];
    }
  }
  console.log(ans);
}

ReverseVowels("heelou");
