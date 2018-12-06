import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import './Auth.css';


class Auth extends Component {

	constructor(props) {
		super(props);
		// this.textInput = React.createRef();

		this.state = {
			email: '',
			password: '',
			message: '',
			loading: false,
			redirect: false,
			path: ''
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

		axios('http://localhost:3001/auth', {
			method: 'post',
			data: {
				email,
				password
			},
			withCredentials: true
		})
			.then(res => {
				this.setState({
					message: res.data.message
				})
				if (res.data.success !== false) {

					this.setState({
						redirect: true,
						path: <Redirect to="/" />
					})
				} else {
					const error = new Error(res.error);
					throw error;
				}

			})
			.catch(err => console.log(err))
	}

	handleSignUp = event => {
		event.preventDefault();
		const { email, password, message } = this.state;

		axios.post(
			'http://localhost:3001/sign',
			{ email, password, message }
		)
			.then(res => {
				this.setState({
					message: res.data.message
				})
			})
			.catch(err => console.log(err))
	}


	render() {
		const { redirect } = this.state;

		return (
			<div>
				{!redirect
					? <div className="auth">
						<div className="auth__wrapper">
							{
								this.state.message &&
								< div className="auth__message">{this.state.message}</div>
							}
							<form className="auth__form" onSubmit={this.handleSubmit}>
								<label className="auth__label">
									<span className="auth__label-text">email</span>
									<input
										className="auth__input"
										type="email"
										name="email"
										value={this.state.email}
										// ref={this.textInput}
										onChange={this.handleInputChange}
									/>
								</label>
								<label className="auth__label">
									<span className="auth__label-text">password</span>
									<input
										className="auth__input"
										type="password"
										name="password"
										value={this.state.password}
										// ref={this.textInput}
										onChange={this.handleInputChange}
									/>
								</label>
								<button className="auth__btn auth__btn-signin" type="submit">
									Sign In
								</button>
								<button className="auth__btn auth__btn-signup" type="submit" onClick={this.handleSignUp}>Sign Up</button>
							</form >
						</div >
					</div >
					: <div>{this.state.path}</div>
				}
			</div>

		);
	}
}

export default Auth;