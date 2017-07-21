import React, {Component} from 'react'
import '../styles/App.css'
import Vehicles from './vehicles'

class App extends Component {
  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor (props) {
    super(props)

    this.state = {
      vehicles: [],
      value: '',
      pilot: '',
      selectedOption: 'vehicles'
    }

    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleOptionChange = this.handleOptionChange.bind(this)
  }

  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:
  handleNameChange (event) {
    console.log(event.target.value)
    this.setState({value: event.target.value})
  }
  //  FORM: SUBMIT METHOD
  // handleSubmit below:
  // See form lesson for details.
  // Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
  // Then, set the value of the input back to an empty string.
  // Enter your code below:
  handleSubmit (event) {
    event.preventDefault()
    console.log(this.state.value)
    const pilot = this.state.value
    this.setState({
      pilot: pilot,
      value: ''
    })
    console.log(this.state.value)
  }

  handleOptionChange (event) {
    let selectedOption = event.target.value
    // set the state
    this.setState({
      selectedOption: selectedOption
    })
    // fetch information for the new option
    fetch(`https://swapi.co/api/${selectedOption}/`)
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(json.results)
      let vehicles = json.results

      this.setState({vehicles: vehicles})
      console.log(this.state.selectedOption)
    })
  }

  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:
  componentDidMount () {
    console.log(this)
    fetch(`https://swapi.co/api/${this.state.selectedOption}/`)
    .then((response) => {
      console.log(response)
      return response.json()
    })
    .then((json) => {
      console.log(json.results)
      let vehicles = json.results

      this.setState({vehicles: vehicles})
    })
  }
  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render () {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */

    let isVehiclesChecked = this.state.selectedOption === 'vehicles'
    let isStarshipsChecked = this.state.selectedOption === 'starships'

    return (
      <div className='App'>
        <div className='jumbotron'>
          <h1 className='display-3'>Star Wars</h1>
          <hr className='my-4' />
          <form>
            <label>Choose a transporter type to display: </label>
            <div>
              <input type='radio' name='type' value='vehicles' checked={isVehiclesChecked} onChange={this.handleOptionChange} /> Vehicles
            </div>
            <div>
              <input type='radio' name='type' value='starships' checked={isStarshipsChecked} onChange={this.handleOptionChange} /> Starships
            </div>
          </form>
        </div>

        <form className='form' onSubmit={this.handleSubmit}>
          <label>What is your name, pilot?</label>
          <input className='form-name' type='text' name='name' placeholder='Enter your name' onChange={this.handleNameChange} value={this.state.value} />
          <button type='submit' name='button'>Submit</button>
          <h4>{this.state.pilot}</h4>
        </form>

        <div className='current-display'>
          <h3 className='current-display-name'>Displaying the <strong>{this.state.selectedOption}</strong> transporters</h3>
        </div>

        <Vehicles vehicles={this.state.vehicles} />
      </div>
    )
  }
}

export default App

/*
The App component needs the following:
 jumbotron section, form section, vehicle cards section.
 Your form will also need a header in which you will pass the state of the form upon submit.
 */
