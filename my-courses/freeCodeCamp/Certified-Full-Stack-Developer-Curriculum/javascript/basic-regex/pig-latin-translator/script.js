const regexConsonants = /[bcdfghjklmnpqrstvwxyz]/i
const regexVowels = /[aeiou]/i

function translatePigLatin(str) {
  let result = str;
  result = str.split("")
  if (regexVowels.test(result[0])) {
    result.push("way");
    result = result.join("")
    return result
  }
  for (let i = 0; i < str.length; i++) {
    if (regexConsonants.test(result[i])) {
      result.push(result[i]);
      delete result[result.indexOf(result[i])];
    } else {
      break
    }
  }
  result.push("ay");
  result = result.join("")
  return result
}

console.log(translatePigLatin("california"));
//should return "aliforniacay"

console.log(translatePigLatin("paragraphs"));
//should return "aragraphspay"

console.log(translatePigLatin("glove"));
//should return "oveglay"

console.log(translatePigLatin("algorithm"));
//should return "algorithmway"

console.log(translatePigLatin("rhythm"));
//should return "rhythmay"
