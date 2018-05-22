import React, { Component } from 'react';
import TvShow from './tvShow'
import Adapter from '../Adapter'

class TVShowList extends Component {

  renderShows = () => {
    return this.props.shows.map (show => {
      return <TvShow key={show.id} id={show.id} name={show.name} type={show.type} />
    })
  }

  render() {
    return (
      <div className="tvShowList">
        {this.renderShows()}
      </div>
    );
  }

}

export default TVShowList;
