import { useState } from 'react';
import './App.css';

import folderData from './folderData';
import Folder from './folder_Component';

function App() {
	const [folder, setFolder] = useState(folderData);

	return (
		<div>
			<Folder explorer={folder} />
		</div>
	);
};

export default App;
