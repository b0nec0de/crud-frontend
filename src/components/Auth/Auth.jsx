import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import Sign from './components/Sign/Sign';

import './Auth.scss';

class Auth extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: '',
			email: '',
			name: '',
			age: '',
			occupation: '',
			city: '',
			password: '',
			loading: false,
			redirect: false,
			path: '',
			newUser: false
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
					message: res.data.message,
					email: '',
					password: ''
				});
				if (res.data.success !== false) {
					this.setState({
						redirect: true,
						path: <Redirect to="/" />
					});
				} else {
					const error = new Error(res.error);
					throw error;
				}
			})
			.catch(err => console.log(err));
	};

	handleSignUp = event => {
		event.preventDefault();
		const { email, password, name, age, occupation, city } = this.state;

		axios
			.post('http://localhost:3001/sign', {
				email,
				password,
				name,
				age,
				occupation,
				city
			})
			.then(res => {
				this.setState({
					message: res.data.message,
					email: '',
					password: '',
					name: '',
					age: '',
					occupation: '',
					city: ''
				});
			})
			.catch(err => console.log(err));
	};

	toggleSignUp = () => {
		this.setState({
			newUser: true
		});
	};

	render() {
		const {
			redirect,
			email,
			password,
			name,
			age,
			occupation,
			city,
			newUser
		} = this.state;

		return (
			<div>
				{!redirect ? (
					<div className="auth">
						<div
							className={
								!newUser
									? 'auth__wrapper'
									: 'auth__wrapper auth__wrapper-sign'
							}
						>
							{this.state.message && (
								<div className="auth__message">
									{this.state.message}
								</div>
							)}
							{!newUser ? (
								<Login
									email={email}
									password={password}
									change={this.handleInputChange}
									submit={this.handleSubmit}
									trigger={this.toggleSignUp}
								/>
							) : (
								<Sign
									email={email}
									password={password}
									name={name}
									age={age}
									occupation={occupation}
									city={city}
									change={this.handleInputChange}
									sign={this.handleSignUp}
								/>
							)}
						</div>
					</div>
				) : (
					<div>{this.state.path}</div>
				)}
			</div>
		);
	}
}

export default Auth;
