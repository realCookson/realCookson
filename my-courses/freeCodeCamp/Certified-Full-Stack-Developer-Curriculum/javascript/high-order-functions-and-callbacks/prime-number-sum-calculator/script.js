function sumPrimes(num) {
  let sum = 0;
  if (num < 2) {
    return 0;
  } else {
    for (let i = 2; i <= num; i++) {
      let divider = 0;
      for (let numToDiv = 1; numToDiv <= i; numToDiv++) {
        if (i % numToDiv === 0) {
          ++divider;
        }
      }
      if (divider === 2) {
        sum += i;
        divider = 0;
      }
    }
  }
  return sum;
}

console.log(sumPrimes(10));
console.log(sumPrimes(5));
