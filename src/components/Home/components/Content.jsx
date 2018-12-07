import React from 'react';
import PropTypes from 'prop-types';
import Search from './Search/Search';
import Button from './Button';

import './Content.css';


const Content = ({
  users,
  isShown,
  toggleMenu,
  visible,
  value,
  onChange }) => {

  return (
    <div className="content">
      <h1 className="header content__header">Users List</h1>
      <ul className="user__list">
        {users.slice(0, visible).map(user =>
          <li key={user.email} className="user__item">
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
              <span className="user__item-descr">Occupation: </span>
              {user.occupation}
            </div>
            <div className="user__item-wrapper">
              <span className="user__item-descr">City: </span>
              {user.city}
            </div>
          </li>
        )}
      </ul>
      <Search
        value={value}
        onChange={onChange}
      />
      <Button
        className={!isShown ? 'btn-edit' : 'btn-close'}
        isShown={isShown}
        toggleMenu={toggleMenu}
      />
    </div>
  );
};

export default Content;

Content.propTypes = {
  users: PropTypes.array,
  isShown: PropTypes.bool,
  toggleMenu: PropTypes.func,
  visible: PropTypes.number,
  value: PropTypes.string,
  onChange: PropTypes.func
}