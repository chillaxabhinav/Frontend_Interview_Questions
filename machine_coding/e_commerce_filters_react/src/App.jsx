import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CtxProvider from './context/context';

import AppLayout from './pages/appLayout';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		path: '/',
		children: []
	}
])

function App() {
	return (
		<CtxProvider>
			<RouterProvider router={router} />
		</CtxProvider>
	)
}

export default App;
