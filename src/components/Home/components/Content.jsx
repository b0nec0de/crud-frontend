import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import './Content.css';


const Content = ({ users, isShown, toggleMenu }) => {
  return (
    <div className="content">
      <h1 className="header content__header">Users List</h1>
      <ul className="user__list">
        {users.map(user =>
          <li key={user.id} className="user__item">
            <span className="user__item-email">Email: </span>
            {user.email}
          </li>
        )}
      </ul>
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
  toggleMenu: PropTypes.func
}