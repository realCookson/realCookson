function mutation (arr) {
    let arr1 = arr.shift();
    let arr2 = arr.pop();
    arr1 = arr1.toLowerCase();
    arr2 = arr2.toLowerCase();

    let i = 0;
    for (let char of arr2) {
        
        if (arr1.includes(char) === true) {
            i++;
        }
    }

    console.log(i);
    console.log(arr2.length);

    if (i === arr2.length) {
        return true;
    } else {
        return false;
    }
};

console.log(mutation(["hello", "hey"]));

console.log(mutation(["hello", "Hello"]));

console.log(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]));

console.log(mutation(["Mary", "Army"]));

console.log(mutation(["Mary", "Aarmy"]));

console.log(mutation(["Alien", "line"]));

console.log(mutation(["floor", "for"]));

console.log(mutation(["hello", "neo"]));

console.log(mutation(["voodoo", "no"]));

console.log(mutation(["ate", "date"]));

console.log(mutation(["Tiger", "Zebra"]));

console.log(mutation(["Noel", "Ole"]));
