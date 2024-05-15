// DOM DFS Inorder Traversal
// Everything is Node, But Element is special type of Node

// If you want to know that node is equal or not then. There is a function on each Node i.e. isEqualNode(toCompare)

// To get child element, you use children property to get all element. To get node element you use childNodes property that give you NodeList

function DfsTraversal(parent) {
    const children = parent.children;
    if (children && children.length === 0) return;
    for (let i = 0; i < children.length; i++) {
        DfsTraversal(children[i]);
        console.log(children[i]);
    }
  }
  
  const parent = document;
  
  DfsTraversal(parent);