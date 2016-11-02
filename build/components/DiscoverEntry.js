import React from 'React';
import {Link} from 'react-router';

const DiscoverEntry = React.createClass({
  render() {
    const {entry, i, parks} = this.props;
    return (
      <div className="discovery-entry">
        <h3>{entry.entryTitle}</h3>
        <p>{entry.entryDate}</p>
      </div>
    )
  }
});

export default DiscoverEntry;
