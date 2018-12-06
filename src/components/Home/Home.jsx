import React, { Component } from 'react';
import axios from 'axios';

import Content from './components/Content';
import Menu from './components/Menu/Menu';

import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      isLoading: false,
      error: null,
      isShown: false
    }
  }

  showError = (error) => {
    this.setState({
      error,
      isLoading: false
    })
  }

  toggleMenu = () => {
    console.log('toggle');
    this.setState({
      isShown: !this.state.isShown
    });
  }

  componentDidMount = () => {

    this.setState({ isLoading: true });

    axios('http://localhost:3001/home', {
      method: 'get',
      withCredentials: true
    })
      .then(res => {

        this.setState({
          users: res.data,
          isLoading: false
        })
      })
      .catch(error => this.showError(error));
  }

  render() {
    const { isLoading, isShown, error, users } = this.state;

    if (error) {
      return <p>{error.message}</p>
    }

    if (isLoading) {
      return <p className="loading">Loading...</p>
    }

    if (!users) {
      return null
    }

    return (
      <div className="main">
        <Content
          isShown={isShown}
          users={users}
          toggleMenu={this.toggleMenu}
        />
        <Menu
          isShown={isShown}
        />
      </div>
    );
  }
}

export default Home;