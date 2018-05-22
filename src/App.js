import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import Filter from './Components/Filter';
import './App.css';

class App extends Component {

  state = {
    shows: []
  }

  componentDidMount = () => {
    Adapter.getShows()
    .then(shows => this.setState({
      shows: shows
    }))
  }

  filterByType = (type) => {
    const filtered = this.state.shows.filter(show => {
      return show.type === type
    })

    this.setState({
      shows: filtered
    })
  }

  showAll = () => {
    Adapter.getShows()
    .then(shows => this.setState({
      shows: shows
    }))
  }

  render = () => {
    console.log(this.state)
    return (
      <div className="App">
        <TVShowList shows={this.state.shows} />
        <Filter shows={this.state.shows} filterByType={this.filterByType} showAll={this.showAll} />
      </div>
    );
  }
}

export default App;
