Array.prototype.myConcat = function(arr) {
    const output = this.slice();
    for (let i = 0; i < arr.length; i++) {
        output.push(structuredClone(arr[i]));
    }
    return output;
}