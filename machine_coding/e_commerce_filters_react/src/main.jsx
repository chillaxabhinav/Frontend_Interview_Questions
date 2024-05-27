/* Design and Implement E-Commerce filters using React.JS

Requirements
- Fetch a list of products and render them on the page.
- Add a filter to sort the products by price.
- Add a filter to show/hide out of stock products.
- Ability to search products.
- Add a filter to show products above certain rating.
- Production grade state management

Bonus
- Ability to share the state of page ( applied filters ) with other users.
- Implement pagination with respect to filters applied.
*/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
