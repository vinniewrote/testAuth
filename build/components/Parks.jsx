const React = require('react')
const data = require('../../public/json/parkData')

const Parks = () => (
  <div className='bucket'>
    <div className='container'>
    {data.parks.map((park, i) => (
      <h3 key={i}>{park.parkName}</h3>
    ))}
  </div>
  </div>
)

module.exports = Parks
