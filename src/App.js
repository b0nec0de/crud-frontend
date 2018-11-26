import React, { Component } from 'react';
import axios from 'axios';
// import dotenv from 'dotenv';
import './App.css';

// dotenv.config();

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();

		const { email, password } = this.state;

		// axios.post(
		// 	'http://localhost:3000/auth', {
		// 		config: {
		// 			headers: {
		// 				'content-type': 'application/json'
		// 			},
		// 			data: {
		// 				email,
		// 				password
		// 			}
		// 		}
		// 	}
		// )

		axios.post(
			'http://localhost:3001/auth',
			{ email, password }
		)

			.then(response => console.log(response.data))
			.catch(err => console.log(err))
	}

	render() {
		return (
			<div className="auth" >
				<div className="auth__wrapper">
					<form className="auth__form" onSubmit={this.handleSubmit}>
						<label className="auth__label">
							<span className="auth__label-text">email</span>
							<input
								className="auth__input"
								type="email"
								name="email"
								onChange={this.handleInputChange}
							/>
						</label>
						<label className="auth__label">
							<span className="auth__label-text">password</span>
							<input
								className="auth__input"
								type="password"
								name="password"
								onChange={this.handleInputChange}
							/>
						</label>
						<button className="btn auth__btn" type="submit">
							submit
						</button>
					</form>
				</div>
			</div>
		);
	}
}

export default App;
