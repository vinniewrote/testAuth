import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Navigation from './MttNavigation';

class Layout extends React.Component {
  render(){
    return(
      <div className='mttLayout'>
        <div>{props.children}</div>
        <Navigation/>
      </div>
    );
  }
}
export default Layout;