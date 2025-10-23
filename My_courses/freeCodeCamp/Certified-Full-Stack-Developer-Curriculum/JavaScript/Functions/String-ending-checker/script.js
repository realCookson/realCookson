function confirmEnding(stringToCheck, stringToCheckAgainst) {
  return stringToCheck.lastIndexOf(stringToCheckAgainst) ===
    stringToCheck.length - stringToCheckAgainst.length
    ? true
    : false;
}

console.log("Congratulation".lastIndexOf("on"));
console.log("Congratulation".length - "on".length);

console.log(confirmEnding("Connor", "n"));
