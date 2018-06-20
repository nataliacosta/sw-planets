import React, { Component } from 'react';
import './App.css';
import Box from './Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      max: 0,
      planet: {},
      fetching: true,
    };
  }

  componentDidMount() {
    this.fetchMax();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.fetching !== this.state.fetching) {
      return true;
    }
    return false;
  }

  fetchMax() {
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => {
      this.setState({max: data.count});
      this.setRandomPlanet();
    })
  }

  fetchPlanet(id) {
    fetch('https://swapi.co/api/planets/' + id)
    .then(response => response.json())
    .then(data => {
      this.setState({id: id, planet: data, fetching: false});
    })
  }

  setRandomPlanet() {
    this.setState({fetching: true});
    let rand = Math.floor((Math.random() * this.state.max) + 1);
    while (rand === this.state.id) {
      rand = Math.floor((Math.random() * this.state.max) + 1);
    }
    this.fetchPlanet(rand);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Box planet={this.state.planet} fetching={this.state.fetching}/>
        <div className="NextButton" onClick={() => this.setRandomPlanet()}>
          NEXT
        </div>
      </div>
    );
  }
}

export default App;
