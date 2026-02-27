function checkPalindrome(str) {
  const clearedStr = str.replace(/[^A-Za-z0-9]/, "").toLowerCase();
  const reversedStr = clearedStr.split("").reverse().join("");
  return clearedStr === reversedStr;
}
console.log(checkPalindrome("tanish"));
console.log(checkPalindrome("madam"));
