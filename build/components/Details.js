import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Deets from './ThemeParkDetails';

class Details extends React.Component {
  render () {
    
    return (
      <div className='bucket'>
        <div className='container'>
          <div>Park Details are here!</div>
            <div className='container'>
              {this.props.parks.map((park, i) => <Deets key={i} i={i} park={park}/>)}
            </div>
        </div>
      </div>
    );
  }
}
export default Details;
