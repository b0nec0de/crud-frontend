import React from 'react';
import PropTypes from 'prop-types';

import './Menu.css';

const Menu = ({ isShown }) => {
  return (
    <div className="menu__wrapper">
      {isShown &&
        <div className="menu">
          <form className="menu__form">
            <label className="menu__label">
              <span className="menu__label-text">name</span>
              <input
                className="menu__input"
                type="text"
                name="name"
              />
            </label>
            <label className="menu__label">
              <span className="menu__label-text">age</span>
              <input
                className="menu__input"
                type="text"
                name="age"
              />
            </label>
            <label className="menu__label">
              <span className="menu__label-text">occupation</span>
              <input
                className="menu__input"
                type="text"
                name="occupation"
              />
            </label>
            <label className="menu__label">
              <span className="menu__label-text">city</span>
              <input
                className="menu__input"
                type="text"
                name="city"
              />
            </label>
            <button className="menu__btn menu__btn-signin" type="submit">
              Submit
            </button>
          </form >
        </div>
      }
    </div>
  );
};

Menu.propTypes = {
  isShown: PropTypes.bool
}

export default Menu;