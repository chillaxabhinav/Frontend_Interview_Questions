import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './app.css';

import AppLayout from './appLayout';
import Home from './pages/home';
import Posts from './pages/posts';
import PostComments from './pages/posts-comments';

const router = createBrowserRouter([
	{
		element: <AppLayout />,
		children: [
			{
				path: '/',
				element: <Home />
			},
			{
				path: '/posts',
				element: <Posts />
			},
			{
				path: '/posts/:postId',
				element: <PostComments />
			}
		]
	}
])

function App() {
    return (
		<RouterProvider router={router} />
    );
};

export default App;
