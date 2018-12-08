import React, { Component } from 'react';
import axios from 'axios';

import Content from './components/Content';
import Menu from './components/Menu/Menu';

import './Home.css';

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: [],
			visible: 5,
			isLoading: false,
			error: null,
			isShown: false,
			searchTerm: ''
		};
	}

	onSearchChange = e => {
		this.setState({
			searchTerm: e.target.value
		});
	};

	showError = error => {
		this.setState({
			error,
			isLoading: false
		});
	};

	toggleMenu = () => {
		this.setState({
			isShown: !this.state.isShown
		});
	};

	handleScroll = () => {
		this.setState({ isLoading: true });

		window.onscroll = () => {
			let bottomOfWindow =
				document.body.scrollTop ||
				document.documentElement.scrollTop +
					document.documentElement.clientHeight ===
					document.documentElement.scrollHeight;
			if (bottomOfWindow) {
				this.setState({
					visible: this.state.visible + 5
				});
			}
		};
	};

	handleUpdatingUsers = () => {
		axios('http://localhost:3001/home', {
			method: 'get',
			withCredentials: true
		})
			.then(res => {
				this.setState({
					users: res.data,
					isLoading: false
				});
			})
			.catch(error => this.showError(error));
	};

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
				});
			})
			.catch(error => this.showError(error));

		this.handleScroll();
	};

	render() {
		const {
			isLoading,
			isShown,
			error,
			users,
			visible,
			searchTerm
		} = this.state;

		if (error) {
			return <p>{error.message}</p>;
		}

		if (isLoading) {
			this.handleUpdatingUsers();
			return <p className="loading">Loading...</p>;
		}

		if (!users) {
			return null;
		}

		return (
			<div className="main">
				<Content
					isShown={isShown}
					users={users}
					visible={visible}
					value={searchTerm}
					onSearchChange={this.onSearchChange}
				/>
				<Menu
					isShown={isShown}
					toggleMenu={this.toggleMenu}
					users={users}
					isLoading={isLoading}
					isUpdating={this.handleUpdatingUsers}
				/>
			</div>
		);
	}
}

export default Home;
