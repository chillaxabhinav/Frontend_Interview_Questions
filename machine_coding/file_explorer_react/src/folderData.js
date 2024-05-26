import { nanoid } from 'nanoid';

// This is our folder structure, we will have
// Add new folder and file name here
export default {
    id: nanoid(),
    isFolder: true,
    name: 'root',
    items: [
        {
            id: nanoid(),
            name: 'public',
            isFolder: true,
            items: [
                {
                    id: nanoid(),
                    name: 'public-nested-1',
                    isFolder: true,
                    items: [
                        {
                            id: nanoid(),
                            name: 'folder-test',
                            isFolder: true,
                            items: [],
                        },
                        {
                            id: nanoid(),
                            name: 'index.html',
                            isFolder: false,
                            items: []
                        },
                        {
                            id: nanoid(),
                            name: 'hello.html',
                            isFolder: false,
                            items: []
                        }
                    ]
                }
            ]
        }
    ]
}