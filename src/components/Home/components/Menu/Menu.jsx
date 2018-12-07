import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import './Menu.css';

class Menu extends Component {

  constructor(props) {
    super(props);

    this.state = {
      message: '',
      email: '',
      name: '',
      age: '',
      occupation: '',
      city: ''
    }
  }

  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, name, age, occupation, city } = this.state;
    const { isUpdating } = this.props

    axios('http://localhost:3001/edit', {
      method: 'post',
      data: {
        email,
        name,
        age,
        occupation,
        city
      },
      withCredentials: true
    })
      .then(res => {
        this.setState({
          message: res.data.message,
          email: '',
          name: '',
          age: '',
          occupation: '',
          city: ''
        })
        isUpdating();
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="menu__wrapper">
        {this.props.isShown &&
          <div className="menu">
            {
              this.state.message &&
              <div className="menu__message">{this.state.message}</div>
            }
            <form className="menu__form" onSubmit={this.handleSubmit}>
              <label className="menu__label">
                <span className="menu__label-text">email</span>
                <input
                  className="menu__input"
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                  required
                />
              </label>
              <label className="menu__label">
                <span className="menu__label-text">name</span>
                <input
                  className="menu__input"
                  type="text"
                  name="name"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                />
              </label>
              <label className="menu__label">
                <span className="menu__label-text">age</span>
                <input
                  className="menu__input"
                  type="text"
                  name="age"
                  value={this.state.age}
                  onChange={this.handleInputChange}
                />
              </label>
              <label className="menu__label">
                <span className="menu__label-text">occupation</span>
                <input
                  className="menu__input"
                  type="text"
                  name="occupation"
                  value={this.state.occupation}
                  onChange={this.handleInputChange}
                />
              </label>
              <label className="menu__label">
                <span className="menu__label-text">city</span>
                <input
                  className="menu__input"
                  type="text"
                  name="city"
                  value={this.state.city}
                  onChange={this.handleInputChange}
                />
              </label>
              <button className="menu__btn menu__btn-signin" type="submit">
                Submit
              </button>
            </form >
          </div>
        }
      </div>
    )
  }
}

export default Menu;

Menu.propTypes = {
  isShown: PropTypes.bool
}