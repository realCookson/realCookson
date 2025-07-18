function pyramid(string, integer, boolean) {
    let pyramid = "\n";
    if (boolean === false) {
        let numOfStrings = 1;
        let numOfSpaces = (2 * integer - 1)/2;
        for (let i = 0; i < integer; i++) {
            if (numOfSpaces <= 0) {
                numOfSpaces = 0;
            }
            pyramid = pyramid + " ".repeat(numOfSpaces) + string.repeat(numOfStrings) + "\n";
            numOfStrings += 2;
            numOfSpaces -= 1;
        }
    } else {
        let numOfStrings = 2 * integer - 1;
        let numOfSpaces = 0;
        for (let i = 0; i < integer; i++) {
            pyramid = pyramid + " ".repeat(numOfSpaces) + string.repeat(numOfStrings) + "\n";
            numOfStrings -= 2;
            numOfSpaces += 1;
        }
    } 
    return pyramid;
}

console.log(pyramid("o", 4, false));

console.log(pyramid("p", 5, true));

console.log(pyramid("N", 10, false));
