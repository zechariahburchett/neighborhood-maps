import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import { load_google_maps, load_foursquare } from './utils.js';

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount(){
    load_foursquare()
      //get response from foursquare api and set state for venues
      .then((responseArray) => {
        this.setState({
        venues: responseArray.response.groups[0].items
      })
      //after we get response from foursquare get the google map
      load_google_maps()
      .then(google =>{
        //after we get the google maps api connected create the map with markers
        this.initMap()
      })
    })
  }

//this creates the map on the page
 initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.758949, lng: -84.191605},
      zoom: 12
    });
    //this will create the markers on the page for each venue
    this.state.venues.map(venue => {
      let marker = new window.google.maps.Marker({
        position: {lat: venue.venue.location.lat, lng: venue.venue.location.lng},
        map: map,
        animation: window.google.maps.Animation.DROP
      })
    })
 }

  render() {
    return (
      <main>
        <Map />
      </main>
    )
  }
}



export default App;
