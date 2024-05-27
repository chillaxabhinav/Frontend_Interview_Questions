import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AppLayout from './pages/appLayout';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		path: '/',
		children: []
	}
])

function App() {
	return <RouterProvider router={router} />
}

export default App;
