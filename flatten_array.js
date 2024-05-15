function doArrayFlat(arr) {
    if (!Array.isArray(arr)) return [arr];
    const output = [];
    for (let i=0; i < arr.length; i++) {
        const outputArray = doArrayFlat(arr[i]);
        output.push.apply(output, outputArray);
    }
    return output;
}

const arr = [1, [2, 3], 4, [5, 6, 7]];

console.log(doArrayFlat(arr));

