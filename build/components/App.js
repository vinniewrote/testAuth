import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import * as actionCreators from '../actions/actionCreators';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.props.doAuthentication();
	}
	// componentWillMount() {}
	// componentWillUnmount() {}
	render() {
		console.log(this.props);
		const {isAuthenticated, profile} = this.props.auth;
		const {name, picture, picture_large} = profile;
		return (
			<div className="container">

				{!isAuthenticated && <button type="button" onClick={this.props.login}>Login</button>}
				{isAuthenticated && <div><button type="button" onClick={this.props.logoutUser}>Log out</button> <h3>Welcome! {name}</h3><img src={picture}/></div>}
				<nav>
					<Link to='/discover' className=''><button>Discover</button></Link>
					<Link to='/parks' className=''><button>Parks</button></Link>
					<Link to='/journal' className=''><button>Journal</button></Link>
					<Link to='/profile' className=''><button>Profile</button></Link>
				</nav>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
