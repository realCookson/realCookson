function titleCase(string) {
  string = string.toLowerCase();
  let stringToModify = string.split(" ");
  let titleCasedString = "";
  for (let word of stringToModify) {
    let wordToTitle = word;
    function firstWordToUpperCase(string) {
      let result = string.split("");
      let firstLetter = result[0];
      result[0] = firstLetter.toUpperCase();
      result = result.join("");
      return result
    }
    wordToTitle = firstWordToUpperCase(wordToTitle);
    titleCasedString = titleCasedString + `${wordToTitle} `
  }
  titleCasedString = titleCasedString.trimEnd();
  return titleCasedString;
}

console.log(titleCase("javaScript is fun"));
console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));
