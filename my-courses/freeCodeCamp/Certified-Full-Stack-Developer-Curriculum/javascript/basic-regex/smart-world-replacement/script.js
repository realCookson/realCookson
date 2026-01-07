function myReplace(str, toBeReplaced, toReplaceWith) {
  const regex = new RegExp(toBeReplaced, "i");
  const charUpperCase = /[A-Z]/;
  const matchedWordIndex = regex.exec(str).index;
  if (charUpperCase.test(str[matchedWordIndex])) {
    toReplaceWith = toReplaceWith.split("");
    toReplaceWith[0] = toReplaceWith[0].toUpperCase()
    toReplaceWith = toReplaceWith.join("");  
  } else {
    toReplaceWith = toReplaceWith.split("");
    toReplaceWith[0] = toReplaceWith[0].toLowerCase()
    toReplaceWith = toReplaceWith.join(""); 
  }
  return str.replace(toBeReplaced, toReplaceWith)
}

console.log(myReplace("Let us go to the store", "store", "mall"));

console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));

console.log(myReplace("I think we should look up there", "up", "Down"));
