import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.props.doAuthentication();
	}
	componentWillMount() {
	}
	componentWillUnmount() {

	}
	render() {
		const { email } = this.props.auth.profile;
		return (
			<div className="container">
				{email}
				<button type="button" onClick={this.props.login}>Login</button>
				<button type="button" onClick={this.props.logoutUser}>Log out</button>
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
