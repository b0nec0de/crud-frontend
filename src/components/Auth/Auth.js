import React, { Component } from 'react';
import axios from 'axios';
import { withCookies } from 'react-cookie';
import './Auth.css';


class Auth extends Component {
	constructor(props) {
		super(props);
		const { cookies } = this.props;

		this.state = {
			email: '',
			password: '',
			token: cookies.get('token'),
			message: ''
		};
	}

	handleInputChange = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
		const { email, password, token, message } = this.state;
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
			{ email, password, token }
		)
			.then(response => {
				cookies.set('token', response.data.token)
				// let message = response.data.message;
				console.log(response.data)
			})
			.then(this.setState({
				token

			}))
			.then(event.target.reset())
			.catch(err => console.log(err))
	}

	handleSignUp = event => {
		event.preventDefault();
		const { email, password } = this.state;

		axios.post(
			'http://localhost:3001/sign',
			{ email, password }
		)
			.then(response => console.log(response.data))
			.catch(err => console.log(err))
	}


	render() {
		return (
			<div className="auth" >
				<div className="auth__wrapper">
					{this.state.caution &&
						< div className="auth__caution">{this.state.caution}</div>
					}
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
						<button className="btn auth__btn-signin" type="submit">
							Sign In
						</button>
						<button className="btn auth__btn-signup" type="submit" onClick={this.handleSignUp}>Sign Up</button>
					</form>
				</div>
			</div >
		);
	}
}

export default withCookies(Auth);