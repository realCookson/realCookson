function uniteUnique(arr1, arr2, ...moreArr) {
  let scaledArr = [arr1, arr2, ...moreArr];
  let unitedArr = [];
  for (let item of scaledArr) {
    for (let value of item) {
      if (unitedArr.includes(value) === false) {
        unitedArr.push(value);
      }
    }
  }
  return unitedArr;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1]));
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]));
console.log(uniteUnique([1, 3, 2], [5, 4], [5, 6]));
console.log(uniteUnique([1, 3, 2, 3], [5, 2, 1, 4], [2, 1]));
