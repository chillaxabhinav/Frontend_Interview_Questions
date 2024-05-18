Array.prototype.myReduce = function(cb, val) {
    if (this.length === 0) {
        if (val) return val
        return undefined;
    }
    let accValue = val ? val : this[0];
    const startingIndex = val ? 0 : 1;
    for (let i = startingIndex; i < this.length; i++) {
        accValue = cb(accValue, this[i], i, this);
    }
    return accValue;
}

const arr = [];
console.log(arr.myReduce((acc, curr, index, arr) => acc + curr, 0));