Array.prototype.findLastIndex = function(ele) {
    let currentIndex = -1;
    for (let i = 0; i < this.length; i++) {
        if (this[i] === ele) {
            currentIndex = i;
        }
    }
    return currentIndex;
}