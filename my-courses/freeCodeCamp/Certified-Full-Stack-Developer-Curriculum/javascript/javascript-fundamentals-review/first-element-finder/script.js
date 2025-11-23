function findElement(array, test) {
  let result;
  for (let item of array) {
    if (test(item) === true) {
      result = item;
      break;
    }
  }
  return result;
}

console.log(
  findElement([1, 3, 5, 8, 9, 10], function (num) {
    return num % 2 === 0;
  })
);
console.log(
  findElement([1, 3, 5, 9], function (num) {
    return num % 2 === 0;
  })
);
console.log(
  findElement([1, 2, 3, 4], function (num) {
    return num > 2;
  })
);
console.log(
  findElement(["hello", "world", "javascript"], function (str) {
    return str.length > 5;
  })
);
