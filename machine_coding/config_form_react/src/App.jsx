import { useState } from 'react'
import './App.css';

import formSchema from './form_data';
import Form from './components/form';

function App() {
	const schema = formSchema;

	const onSubmit = (formData) => {
		console.log(formData);
	};
	
	return (
		<div className='form_container'>
			<Form schema={schema} onSubmit={onSubmit} />
		</div>
	)
}

export default App
