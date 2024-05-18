function flattenTree(node) {
    const flat = [];
    flat.push(node.value);
    if (node.children && Array.isArray(node.children)) {
      for (let i = 0; i < node.children.length; i++) {
        const childNode = node.children[i];
        const flatChild = flattenTree(childNode);
        flat.push.apply(flat, flatChild);
      }
    }
    return flat;
  }
  
  const root = {
    value: 1,
    children: [
      {
        value: 2,
        children: [
          {
            value: 5,
          },
        ],
      },
      {
        value: 3,
      },
      {
        value: 4,
        children: [
          {
            value: 6,
          },
        ],
      },
    ],
  };
  
  console.log(flattenTree(root));
  