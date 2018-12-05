import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Home from './components/Home/Home';
import withAuth from './withAuth';
import './App.css';


function App() {

	return (

		<BrowserRouter>
			<div className="app">
				<Switch>
					<Route path="/auth" component={Auth}
					/>
					<Route exact path="/" component={withAuth(Home)}
					/>
				</Switch>
			</div>
		</BrowserRouter>

	);

}

export default App;
