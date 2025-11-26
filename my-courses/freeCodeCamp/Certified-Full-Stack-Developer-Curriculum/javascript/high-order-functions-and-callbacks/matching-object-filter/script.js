function whatIsInAName(arrOfObj, srcObj) {
  return arrOfObj.filter((obj) => {
    let numOfPropSrcObj = 0;
    let numOfPairs = 0;
    for (let propOfSrcObj in srcObj) {
      ++numOfPropSrcObj;
    }
    for (let propOfSrcObj in srcObj) {
      for (let propOfObj in obj) {
        if (
          propOfObj === propOfSrcObj &&
          obj[propOfObj] === srcObj[propOfSrcObj]
        ) {
          ++numOfPairs;
          if (numOfPairs === numOfPropSrcObj) {
            return obj;
          }
        }
      }
    }
  });
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);

//[{ first: "Tybalt", last: "Capulet" }]

console.log(
  whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], {
    apple: 1,
  })
);

//[{"apple": 1}, {"apple": 1}, {"apple": 1, "bat": 2}]

console.log("---");

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, bat: 2 }
  )
);

//[{"apple": 1, "bat": 2}, {"apple": 1, "bat": 2, "cookie": 2}]

console.log(
  whatIsInAName(
    [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
    { apple: 1, cookie: 2 }
  )
);

//[{"apple": 1, "bat": 2, "cookie": 2}]
