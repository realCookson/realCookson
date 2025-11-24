function diffArray(arr1, arr2) {
  let mergedArr = [];
  for (let i = 0; i < arr1.length; i++) {
    mergedArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    mergedArr.push(arr2[i]);
  }
  console.log(mergedArr);
  let filteredArr = mergedArr.filter();
  return filteredArr;
}

console.log(diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]));

console.log(diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));
