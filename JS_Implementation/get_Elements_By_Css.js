// function getElementsByCss(prop, value, parent = document.body) {
//   let output = [];
//   const children = parent.children;
//   if (!children) return output;
//   for (let i = 0; i < children.length; i++) {
//     const element = children[i];
//     const newOutput = getElementsByCss(prop, value, element);
//     if (newOutput.length > 0) output.push.apply(output, newOutput);
//     const propertyValue = window
//       .getComputedStyle(element, null)
//       .getPropertyValue(prop);
//     if (propertyValue === value) {
//       output.push(element);
//     }
//   }
//   return output;
// }

// console.log(getElementsByCss("font-size", "20px"));


// ================= 2nd Way ================== //

function getElementsByCss(property, value) {
	const matchElements = [];
	const allElements = document.querySelectorAll('*');

	allElements.forEach(element => {
		const style = window.getComputedStyle(element);
		if (style.getPropertyValue(property) === value) matchElements.push(element);
	});

	return matchElements;
}

console.log(getElementsByCss('font-size', '16px'));