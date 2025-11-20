function getIndexToIns(array, num) {
  array.push(num);
  array.sort((a, b) => a - b);
  console.log(array);
  return array.findIndex(item => item >= num)
}

console.log(getIndexToIns([10, 20, 30, 40, 50], 35));
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));
console.log(getIndexToIns([40, 60], 50));
console.log( getIndexToIns([3, 10, 5], 3));

console.log(getIndexToIns([3, 10, 5], 11));
