import React from 'react';
import { CookiesProvider } from 'react-cookie';
import './App.css';

import Auth from './components/Auth/Auth';


function App(props) {

	return (
		<div className="app" >
			<CookiesProvider>
				<Auth />
			</CookiesProvider>
		</div>
	);

}

export default App;
