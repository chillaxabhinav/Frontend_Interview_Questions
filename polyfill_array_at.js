Array.prototype.myAt = function(index) {
    if (index > this.length - 1) {
        throw new Error("Index out of bound");
    }
    for (let i=0; i < this.length; i++) {
        if (i === index) {
            return this[i];
        }
    }
}