function repeatStringNumTimes (string, num) {
  let result = "";
  if (string.length > 0) {
    for (let i = 0; i < num; i++) {
      result += string;
    }
  }
  return result
}

console.log(repeatStringNumTimes("*", 3))
