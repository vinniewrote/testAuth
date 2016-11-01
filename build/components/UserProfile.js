import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';

class Profile extends React.Component {
  render(){
    const {isAuthenticated, profile} = this.props.auth;
    const {name, picture, picture_large} = profile;
    return (
      <div className="container">
        {!isAuthenticated && <button type="button" onClick={this.props.login}>Login</button>}
        {isAuthenticated && <div><button type="button" onClick={this.props.logoutUser}>Log out</button> <h3>Welcome! {name}</h3><img src={picture}/></div>}
      </div>
    );
  }
}

export default Profile;
