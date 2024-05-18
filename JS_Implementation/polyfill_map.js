Array.prototype.myMap = function(cb) {
    const output = [];
    for (let i = 0; i < this.length; i++) {
        output.push(cb(this[i], i, this));
    }
    return output;
}

const arr = [1, 2, 3];
console.log(arr.myMap((value, index, arr) => value*2))