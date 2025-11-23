function frankenSplice(firstArr, secondArr, index) {
  let firstArrPart = secondArr.slice(0, index);
  let secondArrPart = firstArr.slice();
  let thirdArrPart = secondArr.slice(index);
  
  console.log(firstArrPart);
  console.log(secondArrPart);
  console.log(thirdArrPart);

  let mergedArr = [];
  mergedArr = mergedArr.concat(firstArrPart, secondArrPart, thirdArrPart);
  return mergedArr;
}

//Should return [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2, 3], [4, 5], 1));

//Should return ["a", 1, 2, "b"]
console.log(frankenSplice([1, 2], ["a", "b"], 1));

//Should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"]
console.log(frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2));

//Should return [1, 2, 3, 4]
console.log(frankenSplice([1, 2, 3, 4], [], 0));
