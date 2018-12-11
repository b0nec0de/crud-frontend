import React from 'react';
import PropTypes from 'prop-types';

import './Login.scss';

const Login = ({ email, password, change, submit, trigger }) => {
	return (
		<form className="auth__form" onSubmit={submit}>
			<label className="auth__label">
				<span className="auth__label-text">email</span>
				<input
					className="auth__input"
					type="email"
					name="email"
					value={email}
					onChange={change}
					required
				/>
			</label>
			<label className="auth__label">
				<span className="auth__label-text">password</span>
				<input
					className="auth__input"
					type="password"
					name="password"
					value={password}
					onChange={change}
					required
				/>
			</label>
			<button className="auth__btn auth__btn-signin" type="submit">
				Sign In
			</button>
			<button
				className="auth__btn auth__btn-signup"
				type="submit"
				onClick={trigger}
			>
				Sign Up
			</button>
		</form>
	);
};

export default Login;


Login.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string,
	change: PropTypes.func,
	submit: PropTypes.func,
	trigger: PropTypes.func
}