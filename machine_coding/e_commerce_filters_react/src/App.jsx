import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CtxProvider from './context/context';

import AppLayout from './pages/appLayout';
import Home from './pages/home';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		path: '/',
		children: [
			{
				path: '/',
				element: <Home />,
				children: [],
			}
		]
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
