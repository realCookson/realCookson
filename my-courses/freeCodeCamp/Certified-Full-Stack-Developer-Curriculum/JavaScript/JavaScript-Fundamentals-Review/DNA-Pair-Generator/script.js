function pairElement(string) {
  let pairedArray = [];
  for (const arr of string) {
    for (const char of arr) {
      if (char === "A") {
        pairedArray.push(["A", "T"]);
      } else if (char === "T") {
        pairedArray.push(["T", "A"]);
      } else if (char === "C") {
        pairedArray.push(["C", "G"]);
      } else if (char === "G") {
        pairedArray.push(["G", "C"]);
      }
    }
  }
  return pairedArray;
}

console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));
