/*
Implement sum(2)(6)(1)
*/

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3))