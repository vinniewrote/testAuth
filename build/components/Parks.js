import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import ParkSelect from './ParkSelect';

class Parks extends React.Component {
  render () {
    return (
      <div className='bucket'>
        <div className='container'>
          {this.props.parks.map((park, i) => <ParkSelect {... this.props} key={i} i={i} park={park}/>)}
        </div>
      </div>
    );
  }
}
export default Parks;
