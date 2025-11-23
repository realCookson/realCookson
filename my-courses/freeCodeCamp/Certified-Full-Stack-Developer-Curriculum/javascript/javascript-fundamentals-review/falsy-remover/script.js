const falsyValues = [false, null, 0, "", undefined, NaN];

function bouncer(arr) {
  function filterFalsy(item) {
    for (let value of falsyValues) {
      if (item !== value) {
        return item;
      }
    }
  }
  return arr.filter(filterFalsy);
}

console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([null, NaN, 1, 2, undefined]));
