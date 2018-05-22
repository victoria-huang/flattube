import React, { Component } from 'react';

class Filter extends Component {
  // Returns a list of show types (How can we use this for a filter?)
  listOfShowTypes = () => {
    return this.props.shows.map((s)=> {
      return s.type
    }).unique()
  }

  render = () => {
    const buttons = this.listOfShowTypes().map(type => {
      return <div><button onClick={() => {this.props.filterByType(type)}}>{type}</button><br /></div>
    })

    return (
      <div className="filter">
        <h6>Filter By Type:</h6>
        {buttons}
        <button onClick={this.props.showAll}>Show All</button>
      </div>
    );
  }
}

export default Filter;



Array.prototype.unique = function() {
  var arr = [];
  for(var i = 0; i < this.length; i++) {
      if(!arr.includes(this[i])) {
          arr.push(this[i]);
      }
  }
  return arr;
}
