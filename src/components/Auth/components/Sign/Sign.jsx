import React from 'react';
import PropTypes from 'prop-types';

import './Sign.scss';

const Sign = ({
	email,
	password,
	name,
	age,
	occupation,
	city,
	change,
	sign
}) => {
	return (
		<div className="sign">
			<form className="auth__form" onSubmit={sign}>
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
				<label className="auth__label">
					<span className="auth__label-text">name</span>
					<input
						className="auth__input"
						type="name"
						name="name"
						value={name}
						onChange={change}
						required
					/>
				</label>
				<label className="auth__label">
					<span className="auth__label-text">age</span>
					<input
						className="auth__input"
						type="age"
						name="age"
						value={age}
						onChange={change}
						required
					/>
				</label>
				<label className="auth__label">
					<span className="auth__label-text">occupation</span>
					<input
						className="auth__input"
						type="occupation"
						name="occupation"
						value={occupation}
						onChange={change}
						required
					/>
				</label>
				<label className="auth__label">
					<span className="auth__label-text">city</span>
					<input
						className="auth__input"
						type="city"
						name="city"
						value={city}
						onChange={change}
						required
					/>
				</label>
				<button className="auth__btn auth__btn-signin" type="submit">
					Sign Up
				</button>
			</form>
		</div>
	);
};

export default Sign;

Sign.propTypes = {
	email: PropTypes.string,
	password: PropTypes.string,
	name: PropTypes.string,
	age: PropTypes.string,
	occupation: PropTypes.string,
	city: PropTypes.string,
	change: PropTypes.func,
	sign: PropTypes.func
}
