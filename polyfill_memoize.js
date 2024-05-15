const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        const key = args.join()
        if (cache.hasOwnProperty(key)) {
            return cache[key];
        }
        const fnReturn = fn(...args);
        cache[key] = fnReturn;
        return fnReturn;
    }
}

const func = (a) => {
    return a*a
}

const funcMemo = memoize(func);
