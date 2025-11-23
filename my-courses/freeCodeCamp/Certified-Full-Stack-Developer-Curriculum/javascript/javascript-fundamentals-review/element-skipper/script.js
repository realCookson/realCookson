function dropElements(arr, func) {
  let funcResult = [];
  for (let item of arr) {
    if (func(item) === true) {
      funcResult = arr.slice(arr.indexOf(item));
      break;
    }
  }
  return funcResult;
}

console.log(
  dropElements([1, 2, 3, 4], function (n) {
    return n >= 3;
  })
);
console.log(
  dropElements([0, 1, 0, 1], function (n) {
    return n === 1;
  })
);
console.log(
  dropElements([1, 2, 3], function (n) {
    return n > 0;
  })
);
