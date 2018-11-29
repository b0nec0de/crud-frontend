import React, { Component } from 'react';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import './App.css';


class App extends Component {
	constructor(props) {
		super(props);
		const { cookies } = this.props;
		this.state = {
			email: '',
			password: '',
			token: cookies.get('token')
		};
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const { email, password, token } = this.state;
		const { cookies } = this.props;
		// axios.post(
		// 	'http://localhost:3001/auth', {
		// 		config: {
		// 			headers: {
		// 				'content-type': 'application/x-www-form-urlencoded'
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
			.then(response => {
				cookies.set('token', response.data.token)
			})
			.then(this.setState({ token }))
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

export default withCookies(App);
