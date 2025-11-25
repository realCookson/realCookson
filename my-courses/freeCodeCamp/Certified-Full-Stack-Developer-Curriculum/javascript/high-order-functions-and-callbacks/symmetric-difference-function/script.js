function diffArray(arr1, arr2) {
  let filteredArrayA = [];
  let filteredArrayB = [];
  filteredArrayA = arr1.filter(item => {
    if (arr2.includes(item) === false) {
      return item;
    }
  });
  filteredArrayB = arr2.filter(item => {
    if (arr1.includes(item) === false) {
      return item;
    }
  });
  console.log(filteredArrayA);
  console.log(filteredArrayB);
  let result = filteredArrayA.concat(filteredArrayB);
  return result;
}

console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));
