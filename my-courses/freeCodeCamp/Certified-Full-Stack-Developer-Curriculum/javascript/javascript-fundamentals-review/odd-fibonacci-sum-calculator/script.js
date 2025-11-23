function sumFibs(num) {
  let x = 0;
  let y = 1;
  let fibonacci = [[x], [y]];
  for (let i = 0; i < num; i++) {
    console.log(`x ${x}`);
    console.log(`y ${y}`);
    let result = x + y;
    console.log(`result ${result}`);
    x = y;
    y = result;
    fibonacci.push([result]);
  }
  console.log(fibonacci);
  let sum = 0;
  for (let arr of fibonacci) {
    for (let item of arr) {
      if (item % 2 !== 0 && item <= num) {
        sum += item;
      }
    }
  }
  return sum;
}

console.log(sumFibs(4));
