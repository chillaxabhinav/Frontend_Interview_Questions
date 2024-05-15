function DfsTraversal(parent) {
    const children = parent.children;
    if (children && children.length === 0) return;
    for (let i = 0; i < children.length; i++) {
        DfsTraversal(children[i]);
        console.log(children[i]);
    }
  }
  
  const parent = document.getRootNode();
  
  DfsTraversal(parent);