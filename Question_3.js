function flattenArray(nestedArray) {
    return nestedArray.flat(Infinity);
}
console.log(flattenArray([1, [2, [3, [4, 5]]]])); 