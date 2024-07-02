function deepCopy(obj) {
    // for primitive types
    if (Object(obj) !== obj) return obj;

    if (obj instanceof Function) return obj;
    if (obj instanceof Date) return new Date(obj);
    if (obj instanceof RegExp) return new RegExp(obj);

    const result = Array.isArray(obj) ? [] : Object.create(Object.getPrototypeOf(obj));

    // Copying properties recursively for Object and Array
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result[key] = deepCopy(obj[key]);
        }
    }

    return result;
}


// const test = {
//     a: 10,
//     b: {
//         c: [1, 2, 3],
//         d: function() {
//             console.log("d");
//         }
//     }
// }

// console.log(deepCopy(test))