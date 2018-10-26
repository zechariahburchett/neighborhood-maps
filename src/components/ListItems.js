import React, { Component } from 'react';

class ListItems extends Component {

  render(){
    return (
      <div className='listHolder'>
      <ul role='list' tabIndex='0' aria-label='restaurants list'>
      {this.props.filteredVenues && this.props.filteredVenues.length > 0
        && this.props.filteredVenues.map((venue) =>(
          <li className='listItems' role='listitem' tabIndex='0' key={venue.venue.id}>{venue.venue.name}</li>
        ))
      }
      </ul>
      </div>
    );
  }
};

export default ListItems;
