function throttle(fn, wait) {
	let timer = null;
	return function (...params) {
		if (timer !== null) return;
		fn(...params);
		timer = setTimeout(() => timer = null, wait);
	};
}


function test() {
    console.log("Testing throttle");
}

const throttled = throttle(test, 1000);