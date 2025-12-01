function smallestCommons(arr) {
  let requiredDividers = (Math.max(...arr) - Math.min(...arr) + 1);
  let countdown = 0;
  let numToCheck = 1;
  let lcm = 0;
  while(lcm === 0) {
    for (let i = Math.min(...arr); i <= Math.max(...arr); i++) {
      if (numToCheck % i === 0) {
        countdown += 1;
      } else {
        countdown = 0;
        break
      }
      if (countdown === requiredDividers) {
        lcm = numToCheck;
      }
    }
    numToCheck += 1;
  }
  return lcm;
}

let lol = [5, 1];

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5, 1]));
console.log(smallestCommons([2, 10]));
