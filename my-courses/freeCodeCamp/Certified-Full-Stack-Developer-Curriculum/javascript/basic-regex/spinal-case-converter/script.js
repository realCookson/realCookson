function spinalCase(str) {
  let spinalCase = "";
  let regex = /\s|_/g;
  spinalCase = str.replaceAll(regex, "-")
  regex = /([a-z])([A-Z])/g;
  spinalCase = spinalCase
    .replaceAll(regex, "$1-$2")
    .toLowerCase();
  return spinalCase;
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("AllThe-small Things"));
