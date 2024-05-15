/*
Implement - const result = calc.add(10).multiply(5).subtract(5).add(10)
*/

const calc = {
    initial: 0,
    add: function(val) {
        this.initial += val;
        return this
    },
    multiply: function(val) {
        this.initial *= val;
        return this;
    },
    subtract: function(val) {
        this.initial -= val;
        return this;
    }
}

const ans = calc.add(10).multiply(5).subtract(10)

console.log(ans.initial);
