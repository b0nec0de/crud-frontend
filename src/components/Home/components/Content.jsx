import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search/Search';

import './Content.css';

const Content = ({ users, visible, value, onSearchChange }) => {
	// const isSearched = value => user =>
	// 	user.email.toLowerCase().includes(value.toLowerCase());

	const isSearched = (value) => {
		return (user) => {
			const { email = '' } = user
			return email.toLowerCase().includes(value.toLowerCase())
		}
	}


	return (
		<div className="content">
			<div className="content__container">
				<h1 className="header content__header">Users List</h1>
				<ul className="user__list">
					{users
						.slice(0, visible)
						.filter(isSearched(value))
						.map(user => (
							<li key={user._id} className="user__item">
								<div className="user__item-wrapper">
									<span className="user__item-descr">Email: </span>
									{user.email}
								</div>
								<div className="user__item-wrapper">
									<span className="user__item-descr">Name: </span>
									{user.name}
								</div>
								<div className="user__item-wrapper">
									<span className="user__item-descr">Age: </span>
									{user.age}
								</div>
								<div className="user__item-wrapper">
									<span className="user__item-descr">
										Occupation:{' '}
									</span>
									{user.occupation}
								</div>
								<div className="user__item-wrapper">
									<span className="user__item-descr">City: </span>
									{user.city}
								</div>
							</li>
						))}
				</ul>
			</div>
			<Search onSearchChange={onSearchChange} value={value} />
		</div>
	);
};

export default Content;

Content.propTypes = {
	email: PropTypes.string,
	users: PropTypes.array,
	visible: PropTypes.number,
	value: PropTypes.string,
	onSearchChange: PropTypes.func
};
