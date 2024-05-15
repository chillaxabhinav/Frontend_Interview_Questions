const deepCopy = (obj) => {
    if (
        obj === undefined ||
        obj === null ||
        typeof obj === 'number' ||
        typeof obj === 'boolean' ||
        typeof obj === 'string' ||
        typeof obj === 'symbol' ||
        typeof obj === 'function'
    ) {
        return obj
    }

    if (Array.isArray(obj)) return obj.slice();

    const objKeys = Object.keys(obj);
    const copy = {};
    for (let i = 0; i < objKeys.length; i++) {
        copy[objKeys[i]] = deepCopy(obj[objKeys[i]])
    }
    return copy;
}

const test = {
    a: 10,
    b: {
        c: [1, 2, 3],
        d: function() {
            console.log("d");
        }
    }
}

console.log(deepCopy(test))