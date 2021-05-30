import React from 'react';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pokedex: [],
      dropdown: ""
    }
    this.getFromDB = this.getFromDB.bind(this);
    this.changeState = this.changeState.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleShowAllClick = this.handleShowAllClick.bind(this);
  }

  componentDidMount() {
    this.getFromDB()
  }

  getFromDB() {
    axios.get('/all')
    .then(response => {
      console.log('data successfully imported from database')
      this.changeState(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }

  changeState(data) {
    this.setState({
      pokedex: data
    })
  }

  handleFormChange(e) {
    e.preventDefault()
    this.setState({
      dropdown: e.target.value
    })
    console.log(e.target.value)
  }

  handleShowAllClick(e) {
    e.preventDefault()
    this.setState({
      dropdown: ""
    })
  }



  render() {
    // var filteredPokemon;
    // if (this.state.dropdown !== "") {
    //   filteredPokemon = this.state.pokedex.filter((pokemon) => pokemon.type === this.state.dropdown)
    // } else {
    //   filteredPokemon = this.state.pokedex;
    // }
    // console.log(filteredPokemon)

    if (this.state.dropdown === "") {
      var mappedAndFiltered = this.state.pokedex.map((pokemon, index) => {
        return (
        <div key={index}>
          <p>
          Name: {pokemon.name} <br></br>
          Type: {pokemon.type} <br></br>
          <img src={pokemon.img} />
          </p>
        </div>
        )
      })
    } else {
      var mappedAndFiltered = this.state.pokedex.filter(pokemon => pokemon.type === this.state.dropdown).map((pokemon, index) => {
        return (
        <div key={index}>
          <p>
          Name: {pokemon.name} <br></br>
          Type: {pokemon.type} <br></br>
          <img src={pokemon.img} />
          </p>
        </div>
        )
      })
    }

    return (
      <div>
        <div>
        <h1>Fullstack Pokedex!</h1>
        <button value="" onClick={this.handleShowAllClick}>Show All</button>
        <select id="types" onChange={this.handleFormChange}>
          <option>Sort by Type</option>
          <option>Grass</option>
          <option>Fire</option>
          <option>Water</option>
        </select>
        </div>

      {mappedAndFiltered}
      </div>
    )
  }
}

export default App;


        // <div>
        //   <h3>Bulbasaur</h3>
        //   <img src="http://vignette4.wikia.nocookie.net/nintendo/images/4/43/Bulbasaur.png/revision/latest?cb=20141002083518&path-prefix=en" />
        // </div>
        // <div>
        //   <h3>Ivysaur</h3>
        //   <img src="http://vignette3.wikia.nocookie.net/nintendo/images/8/86/Ivysaur.png/revision/latest?cb=20141002083450&path-prefix=en" />
        // </div>
        // <div>
        //   <h3>Venusaur</h3>
        //   <img src="http://vignette2.wikia.nocookie.net/nintendo/images/b/be/Venusaur.png/revision/latest?cb=20141002083423&path-prefix=en" />
        // </div>