import { nanoid } from "nanoid";

const useTraverseTree = () => {
  function addComment(tree, currentParent, parentId, text) {
    if (currentParent === parentId) {
      const newComment = {
        id: nanoid(),
        text: text,
        items: [],
      };
      const clonedTree = structuredClone(tree);
      clonedTree.unshift(newComment);
      return clonedTree;
    }
    for (let i = 0; i < tree.length; i++) {
      const childTree = tree[i];
      const newItems = addComment(
        childTree.items,
        childTree.id,
        parentId,
        text
      );
      childTree.items = newItems;
    }
    return tree;
  }
  return {
    addComment,
  };
};

export default useTraverseTree;
