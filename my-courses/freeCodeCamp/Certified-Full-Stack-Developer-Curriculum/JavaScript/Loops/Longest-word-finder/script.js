function findLongestWordLength(sentence) {
  let longestWordLength = 0;
  let sentenceArr = sentence.split(" ");
  for (let i = 0; i < sentenceArr.length; i++) {
    if (longestWordLength < sentenceArr[i].length) {
      longestWordLength = sentenceArr[i].length;
    }
  }
  return longestWordLength;
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
