function getElementsByCss(prop, value, parent = document.body) {
  let output = [];
  const children = parent.children;
  if (!children) return output;
  for (let i = 0; i < children.length; i++) {
    const element = children[i];
    const newOutput = getElementsByCss(prop, value, element);
    if (newOutput.length > 0) output.push.apply(output, newOutput);
    const fontSize = window
      .getComputedStyle(element, null)
      .getPropertyValue(prop);
    if (fontSize === value) {
      output.push(element);
    }
  }
  return output;
}

console.log(getElementsByCss("font-size", "20px"));
