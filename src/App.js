import React, { Component } from 'react';
import title from './assets/title.png';
import './styles/App.css';
import Box from './components/Box';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 0,
      max: 0,
      planet: {},
      fetching: true,
      error: false,
    };
  }

  componentDidMount() {
    this.fetchMax();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.fetching !== this.state.fetching) {
      return true;
    }
    if (nextState.error !== this.state.error) {
      return true;
    }
    return false;
  }

  fetchMax = () => {
    fetch('https://swapi.co/api/planets/')
    .then(response => response.json())
    .then(data => {
      this.setState({max: data.count});
      this.setRandomPlanet();
    })
    .catch(() => {
      this.setState({error: true});
    })
  }

  fetchPlanet = (id) => {
    fetch('https://swapi.co/api/planets/' + id)
    .then(response => response.json())
    .then(data => {
      this.setState({id: id, planet: data, fetching: false, error: false});
    })
    .catch(() => {
      this.setState({error: true});
    })
  }

  setRandomPlanet = () => {
    this.setState({fetching: true});
    let rand = Math.floor((Math.random() * this.state.max) + 1);
    while (rand === this.state.id) {
      rand = Math.floor((Math.random() * this.state.max) + 1);
    }
    this.fetchPlanet(rand);
  }

  render() {
    return (
      <div className="App">
        <div className="AppTitle">
          <img src={title} alt="Star Wars Random Planets Edition"/>
        </div>
        <Box planet={this.state.planet} fetching={this.state.fetching} error={this.state.error}/>
        <div className="NextButton" onClick={this.setRandomPlanet}>
          NEXT
        </div>
      </div>
    );
  }
}

export default App;
