function deep_compare(source, target) {
    if (typeof(source) !== typeof(target)) return false;

    if (Array.isArray(source) === Array.isArray(target)) {
        if (source.length !== target.length) return false;
        return source.every((ele, index) => deep_compare(ele, target[index]));
    } else if (typeof(source) === 'object') {
        if (Object.keys(source).length !== Object.keys(target).length) return false;
        return Object.keys(source).every((key) => deep_compare(source[key], target[key]));
    }

    return source === target;
}