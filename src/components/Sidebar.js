import React, { Component } from 'react';
import ListItems from './ListItems.js';

class Sidebar extends Component {
  render(){
    return (
      <div id='sidebar'>
      <h1 id='title' tabIndex='0'>
      Foursquare Google Maps - Dayton Restaurants
      </h1>
        <input
            role='input'
            type='text'
            placeholder='Start typing to filter restaurants...'
            value = {this.props.query}
            onChange = {(event) => this.props.filterVenues(event.target.value)}
          />
          <ListItems filteredVenues={this.props.filteredVenues} />
      </div>
    );
  }
};

export default Sidebar;
