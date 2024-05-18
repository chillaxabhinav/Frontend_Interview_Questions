/*
Throttling helps us to limit the function call for a certain amount of time
After that we can limit only the function can be called
*/

function throttle(fn, limit) {
    let lastTime = new Date().getTime();
    return function(...args) {
        const currentTime = new Date().getTime();
        if ((currentTime - lastTime) > limit) {
            lastTime = new Date().getTime();
            fn(...args);
        }
    }
}

function test() {
    console.log("Testing throttle");
}

const throttled = throttle(test, 1000);