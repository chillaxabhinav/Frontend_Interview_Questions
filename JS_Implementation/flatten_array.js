function flattenArray(arr) {
	const output = [];
	if (!Array.isArray(arr) && arr.length === 0) return output;
	for (let i = 0; i < arr.length; i++) {
		const element = arr[i];
		if (Array.isArray(element)) {
			const flatten = flattenArray(element);
			output.push.apply(output, flatten);
		} else {
			output.push(element);
		}
	}
	return output;
}

const arr = [1, [2, 3], 4, [5, 6, 7]];

console.log(flattenArray(arr));

