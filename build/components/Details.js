import React from 'react';
import ReactRouter from 'react-router';
import { Link } from 'react-router';
import Deets from './ThemeParkDetails';

class Details extends React.Component {
  render () {
    const park = this.props.parks.find(park => park.parkId == this.props.params.parkId);
    const allPoints = [
      ...park.coasters,
      ...park.attractions,
      ...park.restaurants,
      ...park.shops
    ]
    return (
      <div className='parkContainer'>
        <div className='parkMasthead'>
          <h2>{park.parkName}</h2>
          <p>{park.parkOpenYear}</p>
          <p>{park.parkTheme}</p>
          <p>{park.parkDesigner}</p>
          <p>{park.parkOwner}</p>
        </div>
        <div className='parkFilter'>
          <div className='filterbar'>
            <ul>
              <li>parks</li>
              <li>attractions</li>
              <li>restaurants</li>
              <li>shops</li>
            </ul>
          </div>
          {allPoints.map((attractions, i) => <Deets key={i} i={i} attractions={attractions}/>)}
        </div>
      </div>
    );
  }
}

// const Details = props => {console.log(props.params, props.parks)
//   const park = props.parks.find(park => park.parkId == props.params.parkId);
//
//     var allthings = [
//       ...park.coasters,
//       ...park.attractions,
//       ...park.restaurants,
//       ...park.shops
//     ]
//
//     console.log('allarays:', allthings);
//     return(
//       <div>
//         <p>{park.parkOpenYear}</p>
//         <p>{park.parkTheme}</p>
//         <p>{park.parkDesigner}</p>
//         <p>{park.parkOwner}</p>
//
//         {allthings.map((attractions, i) =>
//           <div className='parkFilter'>
//             <div className='coasters'>{attractions.coasterName}</div>
//             <div className='attractions'>{attractions.attractionName}</div>
//             <div className='restaurants'>{attractions.restaurantName}</div>
//             <div className='shops'>{attractions.shopName}</div>
//           </div>)}
//       </div>
//     )}
export default Details;
