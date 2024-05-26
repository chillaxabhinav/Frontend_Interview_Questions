import { useState } from 'react';
import './App.css';

import folderData from './folderData';
import Folder from './folder_Component';
import useTraverseTree from './use-traverse-tree';

function App() {
	const [folder, setFolder] = useState(folderData);

	const { insertNode } = useTraverseTree();

	const handleInsertNode = (folderId, item, isFolder) => {
		const newFolder = insertNode(folder, folderId, item, isFolder);
		setFolder(newFolder);
	}

	return (
		<div>
			<Folder
				explorer={folder}
				handleInsertNode={handleInsertNode}
			/>
		</div>
	);
};

export default App;
