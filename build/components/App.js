import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import ScoreBoard from './ScoreBoard';

class App extends React.Component {
	componentDidMount() {
		this.props.fetchData();
		this.intervalRef = setInterval(() => {
			this.props.fetchData();
		}, 30000);
	}
	componentWillUnmount() {
		clearInterval(this.intervalRef);
	}
	render() {
		const events = {
			toggleView: this.props.toggleView,
			toggleGame: this.props.toggleGame
		};
		return (
			<div className="container">
				<ScoreBoard {...this.props.gameData} view={this.props.editView} events={events} />
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		gameData: state.gameData,
		editView: state.editView
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
