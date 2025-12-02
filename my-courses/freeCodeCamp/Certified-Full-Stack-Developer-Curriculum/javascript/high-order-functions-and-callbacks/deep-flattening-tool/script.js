function steamrollArray(arr) {
  const flattened = [];
  for (const el of arr) {
    if (Array.isArray(el)) {
      flattened.push(...steamrollArray(el));
    } else {
      flattened.push(el);
    }
  }
  return flattened;
}

console.log(steamrollArray([["x", "y"]]));
console.log(steamrollArray([[["a"]], [["b"]]]));
