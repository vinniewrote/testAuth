import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import data from '../data/parkData';

class Parks extends React.Component {
  render () {
    return (
      <div className='bucket'>
        <div className='container'>
          {data.parks.map((park, i) => (
          <div key={i} className='parkButton'>
            <h3>{park.parkName}</h3>
            <p>{park.parkLocation.parkCity}, {park.parkLocation.parkStateAbbrev} {park.parkLocation.parkCountry}</p>
          </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Parks;
