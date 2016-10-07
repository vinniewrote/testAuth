import React from 'react'

class Profile extends React.Component {
  componentWillMount() {
    this.lock = new Auth0Lock('GvDZvczMAMsbnOuNMzHXTFtRxe5DJUSw', 'made-to-thrill.auth0.com');
  }
  showLock() {
    console.log('props:', this.props);
    console.log('lock:'+ this.lock);
    this.lock.show();
  }
   render(){
     return (
       <div className="login-box">
           <button onClick={this.showLock.bind(this)}>Sign In</button>
       </div>
     );
   }
}
export default Profile
