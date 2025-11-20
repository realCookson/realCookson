function sumAll([num1, num2]) {
  let userArr = [num1, num2];
  let result = 0;
  for (let i = 0; i <= Math.max(...userArr) - Math.min(...userArr); i++) {
    result = result + Math.min(...userArr) + i;
  }
  return result;
}

console.log(sumAll([1, 4]));

console.log(sumAll([4, 1]));

console.log(sumAll([5, 10]));

console.log(sumAll([10, 5]));
