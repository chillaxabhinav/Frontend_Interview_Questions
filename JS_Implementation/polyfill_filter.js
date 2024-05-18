Array.prototype.myFilter = function(cb) {
    const output = [];
    for (let i=0; i < this.length; i++) {
        const cbOut = cb(this[i], i, this);
        if (cbOut) {
            output.push(cbOut);
        }
    }
    return output;
}
