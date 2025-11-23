function chunkArrayInGroups (arr, num) {
    let chunkedArray = [];
    for (let i = 0; i = Math.ceil(arr.length/num); i++) {
        chunkedArray.push(arr.splice(0, num));
        
    }
    return chunkedArray;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3));

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2));
