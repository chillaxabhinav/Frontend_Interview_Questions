const onlyOnceFunc = (cb) => {
    let called = 0;
    return (context, ...args) => {
        if (called < 1) {
            if (typeof cb === 'function') {
                cb.apply(context, args);
                called += 1
            } else {
                throw new Error('Callback is not a function')
            }
        }
    }
};

const myFunc = (...args) => {
    console.log("hello", args);
}

const updated = onlyOnceFunc(myFunc);

updated(this, 1, 2, 3);

updated(this, 1, 2, 3);
updated(this, 1, 2, 3);
updated(this, 1, 2, 3);
updated(this, 1, 2, 3);
updated(this, 1, 2, 3);
