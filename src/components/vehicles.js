import React, { Component } from 'react'

export default class Vehicles extends Component {
  render () {
    return (
      <div className='card-deck'>
        {this.props.vehicles.map((vehicle) =>
          <div className='card' key={vehicle.name}>
            <div className='card-block'>
              <h4 className='card-title'>Transporter: {vehicle.name}</h4>
              <p className='card-text'>Model: {vehicle.model}</p>
              <p className='card-text'>Specs: </p>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>Manufacturer: {vehicle.manufacturer}</li>
                <li className='list-group-item'>Class: {vehicle.vehicle_class}{vehicle.starship_class}</li>
                <li className='list-group-item'>Passengers: {vehicle.passengers}</li>
                <li className='list-group-item'>Crew: {vehicle.crew}</li>
                <li className='list-group-item'>Length: {vehicle.length}</li>
                <li className='list-group-item'>Max Speed: {vehicle.max_atmosphering_speed}</li>
                <li className='list-group-item'>Cargo Capacity: {vehicle.cargo_capacity}</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}
