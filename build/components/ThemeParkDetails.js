import React from 'react';
import { Link } from 'react-router';

// class ThemeParks extends React.Component {
//   render () {
//     const {entry, i, park} = this.props;
//     console.log()
//     return (
//       <div className='bucket'>
//         <p>{park.parkOpenYear}</p>
//         <p>{park.parkTheme}</p>
//         <p>{park.parkDesigner}</p>
//       </div>
//     );
//   }
// }

// const ThemeParks = ({params}) => {console.log(params)
// return(
//   <div>Hello</div>
// )}


const ThemeParks = React.createClass({
  render() {
    const {attractions} = this.props;
    return (
        <div className='coasters'>
            {attractions.coasterName}
          <button>+</button>
        </div>
    )
  }
});

export default ThemeParks;
