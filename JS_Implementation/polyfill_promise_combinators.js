/*
Promise.all

All success -> returns an array of all the promises
Once error is encountered -> only error is returned
*/
Promise.prototype.myAll = function(promises) {
    return new Promise((resolve, reject) => {
        const output = [];
        let pending = promises.length;
        if (Array.isArray(promises) && pending === 0) resolve(output);
        promises.forEach((promise, index) => {
            promise
            .then(res => {
                output[index] = res;
                pending -= 1;
                if (pending === 0) resolve(output);
            })
            .catch(err => reject(err));
        });
    })
}


/*
Promise.allSettled

returns an array of all the promises either settled or rejected
*/
Array.prototype.myAllSettled = function(promises) {
    return new Promise((resolve, reject) => {
        const output = [];
        if (Array.isArray(promises) && promises.length === 0) resolve(output);
        let pending = promises.length;
        promises.forEach((promise, index) => {
            promise.then(res => {
                output[index] = res;
                pending -= 1
                if (pending === 0) resolve(output);
            }).catch(err => {
                output[index] = err;
                pending -= 1;
                if (pending === 0) resolve(output);
            })
        })
    })
}

/*
Promise.race

returns an error or success of the first promsie resolved be it success or error
*/
Array.prototype.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(promises) && promises.length === 0) resolve(undefined);
        // handle not array case as well
        let pending = promises.length;
        promises.forEach((promise) => {
            promise.then(res => {
                pending -= 1;
                resolve(res);
            }).catch(err => reject(err)) 
        })
    })
}

/*
Promise.any

returns an error or success of the first promsie resolved be it success or error
*/
Array.prototype.myRace = function(promises) {
    return new Promise((resolve, reject) => {
        if (Array.isArray(promises) && promises.length === 0) resolve(undefined);
        // handle not array case as well
        let pending = promises.length;
        promises.forEach((promise) => {
            promise.then(res => {
                pending -= 1;
                resolve(res);
            }).catch(() => {
                pending -= 1;
                if (pending === 0) {
                    reject("All promises failed");
                }
            }) 
        })
    })
}

