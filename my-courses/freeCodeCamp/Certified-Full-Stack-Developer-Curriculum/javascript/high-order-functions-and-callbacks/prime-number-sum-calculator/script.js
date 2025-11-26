function sumPrimes(num) {
  let sum = 0;
  if (num < 2) {
    return 0;
  } else {
    for (let i = 2; i <= num; i++) {
      if (/* Condition to check if "i" is a prime */) {
        sum += i;
      }
    }
  }
  return sum;
}
