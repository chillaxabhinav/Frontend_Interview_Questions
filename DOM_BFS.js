// DOM BFS Traversal

function BfsTraversal(parent) {
    const queue = [parent];
    while (queue.length > 0) {
        const top = queue.shift();
        console.log(top);
        const topChildrens = top.children || [];
        queue.push.apply(queue, topChildrens);
    }
}

const parent = document;

BfsTraversal(parent);