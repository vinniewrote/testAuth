import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import data from './parkData';

class Parks extends React.Component {
  render () {
    return (
      <div className='bucket'>
        <div className='container'>
          {data.parks.map((park, i) => (
          <h3 key={i}>{park.parkName}</h3>
          ))}
        </div>
      </div>
    );
  }
}
export default Parks;
