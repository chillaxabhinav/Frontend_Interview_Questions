Function.prototype.myCall = function(context, ...args) {
    context.myFn = this;
    return context.myFn(...args);
}