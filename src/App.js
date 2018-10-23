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
      .then((responseArray) => {
        //console.log(responseArray.response.groups[0].items)
        this.setState({
        venues: responseArray.response.groups[0].items
      })
    })
    load_google_maps()
    .then(google =>{
      this.initMap()
    })
  }

 initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: -34.397, lng: 150.644},
      zoom: 8
    });
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
