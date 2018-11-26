import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }


  handleSubmit = (event) => {
    event.preventDefault();

    fetch('/api/url', {
      method: 'POST',
      body: this.state,
    });

    console.log(this.state);
  }


  render() {
    return (
      <div className="auth">
        <div className="auth__wrapper">
          <form className="auth__form" onSubmit={this.handleSubmit}>
            <label>
              E-mail
              <input
                type="email"
                name="email"
                onChange={this.handleInputChange} />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                onChange={this.handleInputChange} />
            </label>
            <button className="btn auth__btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
