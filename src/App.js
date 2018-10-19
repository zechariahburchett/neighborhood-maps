import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js'
import { load_google_maps } from './utils.js'

class App extends Component {
    componentDidMount() {
      load_google_maps()
      .then(google => {
         const map = new google.maps.Map(document.getElementById('map'), {
            center: {lat: 39.758949, lng: -84.191605},
            zoom: 8
          });
      })
    }

  render() {
    return (
        <Map />
    )
  }
}



export default App;
