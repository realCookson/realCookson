function addTogether(arr1, arr2) {
  if (typeof arr1 !== 'undefined' && typeof arr2 !== 'undefined' && typeof arr1 === 'number' && typeof arr2 === 'number') {
    return arr1 + arr2;
  } else if (arguments.length === 2 && (typeof arr1 !== 'number' || typeof arr2 !== 'number')) {
    return undefined
  } else if (typeof arr1 === 'number') {
    return function sumTwoAnd(arr2) {
      if (typeof arr2 !== 'undefined' && typeof arr2 === 'number') {
        return arr1 + arr2;
      } else {
        return undefined
      }
    }
  }
}

console.log(addTogether(2, 3));
console.log(addTogether(23.4, 30));

console.log(addTogether("2", 3));
console.log(addTogether(5, undefined));
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ"));

console.log(addTogether(5));
console.log(addTogether(5)(7));
console.log(addTogether(2)([3]));
console.log(addTogether(2, "3"));
