import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactRouter from 'react-router';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
import Profile from './profile';
import Layout from './Layout';
import Navigation from './MttNavigation';
import Discover from './Discover';
import Parks from './Parks';
import Journal from './Journal';
import Details from './Details';

class App extends React.Component {
	render(){
		return (
			<Router history={hashHistory}>
				<Route path='/' component={Layout}>
          <Route path='/discover' component={Discover} />
          <Route path='/parks' component={Parks}>
            <Route path='/details/:id' component={Details} />
          </Route>
          <Route path='/journal' component={Journal} />
          <Route path='/profile' component={Profile} />
        </Route>
			</Router>
		);
	}
}

export default App;
