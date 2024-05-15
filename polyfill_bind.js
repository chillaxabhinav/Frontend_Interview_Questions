Function.prototype.myBind = function(context, ...args) {
    context.fn = this;
    return function(...next) {
        context.fn(...args, ...next);
    }
}