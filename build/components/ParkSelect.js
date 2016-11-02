import React from 'React';
import {Link} from 'react-router';

const ParkSelect = React.createClass({
  render() {
    return (
      <div className="park-select">
      <button>
        <h3>{this.props.parkName}</h3>
        <p>{this.props.parks.parkCity}, {this.props.parks.parkState} {this.props.parks.parkCountry}</p>
      </button>
      </div>
    )
  }
});

export default ParkSelect;
