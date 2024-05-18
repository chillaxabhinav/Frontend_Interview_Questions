const myModule = (function() {

    // Private function encapsulation, this is like a module
    const privateFunc = () => {
        console.log("Inner function...");
    }

    return {
        external: privateFunc
    };
})()

console.log(myModule.external())
