Function.prototype.myApply = function(context, args) {
    context.myFn = this;
    return context.myFn(...args);
}