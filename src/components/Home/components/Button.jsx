import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, isShown, toggleMenu }) => {
  const button = isShown ? 'Close' : 'Edit';

  return (
    <button
      className={`btn ${className}`}
      type="button"
      onClick={toggleMenu}
    >
      {button}
    </button>
  );
};

export default Button;

Button.propTypes = {
  className: PropTypes.string,
  isShown: PropTypes.bool,
  toggleMenu: PropTypes.func
}