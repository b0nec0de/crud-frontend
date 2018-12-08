import React from 'react';
import PropTypes from 'prop-types';

import './Search.css';

const Search = ({ value, onSearchChange }) => {
	return (
		<div className="search">
			<form className="search__form">
				<input
					className="search__input"
					type="search"
					value={value}
					placeholder="Search..."
					onChange={onSearchChange}
				/>
			</form>
		</div>
	);
};

export default Search;

Search.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func
};
