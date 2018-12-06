import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  constructor() {
    super();

    this.state = {
      isLoading: false,
      error: null
    }
  }

  showError = (error) => {
    this.setState({
      error,
      isLoading: false
    })
  }

  componentDidMount = () => {
    axios('http://localhost:3001/home', {
      method: 'get',
      withCredentials: true
    })
      .then(res => {
        this.setState({
          message: "You are at home"
        })
      })
      .catch(error => this.showError(error));
  }

  render() {
    const { isLoading, error } = this.state;
    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p className="loading-message">Loading...</p>
    }

    return (
      <div>
        <h3>Home</h3>
      </div>
    );
  }
}

export default Home;