import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Deets from './Details';

class ThemeParks extends React.Component {
  render () {
    const {entry, i, park} = this.props;
    return (
      <div className='bucket'>
        <p>{park.parkOpenYear}</p>
        <p>{park.parkTheme}</p>
        <p>{park.parkDesigner}</p>
      </div>
    );
  }
}
export default ThemeParks;
