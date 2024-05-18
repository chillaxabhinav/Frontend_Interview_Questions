/*
f(a, b, c) = f(a)(b)(c)
*/

const convertCurry = (fn) => {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn(...args);
        } else {
            return function(...next) {
                return curried(...args, ...next);
            }
        }
    }
};

const sum = (a, b, c) => {
    return a + b + c
};

const convertedCurry = convertCurry(sum);

console.log(convertedCurry(1)(2)(3))