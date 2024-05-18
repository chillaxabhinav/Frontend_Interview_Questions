Array.prototype.myFindIndex = function(ele) {
    for (let i = 0; i < this.length; i++) {
        if (this[i] === ele) return i;
    }
    return -1;
}