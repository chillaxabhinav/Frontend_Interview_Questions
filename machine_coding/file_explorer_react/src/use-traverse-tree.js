import { nanoid } from "nanoid";

const useTraverseTree = () => {
    function insertNode (tree, folderId, item, isFolder) {
        if (tree.id === folderId) {
            const itemsClone = structuredClone(tree.items);
            itemsClone.unshift({
                id: nanoid(),
                name: item,
                isFolder,
                items: []
            });
            tree.items = itemsClone;
            return tree;
        }
        for (let i = 0; i < tree.items.length; i++) {
            const currenItem = tree.items[i];
            tree.items[i] = insertNode(currenItem, folderId, item, isFolder);
        }
        return tree;
    };
    return { insertNode };
};

export default useTraverseTree;
