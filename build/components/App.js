import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ReactRouter from 'react-router';
import { Router, Route, hashHistory } from 'react-router';
import { Link } from 'react-router';
import UserProfile from './UserProfile';
import Layout from './Layout';
import Navigation from './MttNavigation';
import Discover from './Discover';
import Parks from './Parks';
import Journal from './Journal';
import Details from './Details';
import { Provider } from 'react-redux';
import store, { history } from '../../store';

class App extends React.Component {
	render(){
		return (
			// <Provider store={store}>
			// 	<Router history={history}>
			// 		<Route path='/' component={Layout}>
	    //       <Route path='/discover' component={Discover} />
	    //       <Route path='/parks' component={Parks} />
	    //       <Route path='/journal' component={Journal} />
	    //       <Route path='/profile' component={Profile} />
	    //     </Route>
			// 	</Router>
			// </Provider>

<p>Hola</p>
		);
	}
}

export default App;
