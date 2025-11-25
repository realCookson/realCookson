function destroyer(arr, ...args) {
  for (let arg of args) {
    arr = arr.filter(item => item !== arg);
  }
  return arr
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
