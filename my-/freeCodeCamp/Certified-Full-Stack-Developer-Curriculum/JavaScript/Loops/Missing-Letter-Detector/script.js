const alphabet = "abcdefghijklmnopqrstuvwxyz";

function fearNotLetter(string) {
  let result;
  const indexOfFirstChar = alphabet.indexOf(string[0]);
  for (let i = 0; i < string.length; i++) {
    if (alphabet[i + indexOfFirstChar] !== string[i]) {
     result = alphabet[i + indexOfFirstChar];
     break
    } 
  }
  return result;
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
