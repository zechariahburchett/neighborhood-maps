import React, { Component } from 'react';
import './App.css';
import Map from './components/Map.js';
import { load_google_maps, load_foursquare } from './utils.js';

class App extends Component {

  state = {
    venues: [],
    query: '',
    markers: []
  }

  componentDidMount(){
    load_foursquare()
      //get response from foursquare api and set state for venues
      .then((responseArray) => {
        //console.log (responseArray)
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

//this creates the map, markers and info windows for the page
 initMap = () => {
    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: {lat: 39.758949, lng: -84.191605},
      zoom: 12
    });
    //create one info window on page
    let infowindow = new window.google.maps.InfoWindow()

    //create the markers and info windows on the page for each venue
    this.state.venues.map(venue => {

      //get data for the info window for the venue
      let contentString = ("<p>" + "<b>"+'Name: '+"</b>" + venue.venue.name + "<br />" +
                     "<b>" + 'Address: ' + "</b>" + venue.venue.location.address + ' ' + venue.venue.location.city +
                     ', ' + venue.venue.location.state + ' ' + venue.venue.location.postalCode + "<p />")
      //create the markers
      let marker = new window.google.maps.Marker({
        position: {lat: venue.venue.location.lat, lng: venue.venue.location.lng},
        map: map,
        animation: window.google.maps.Animation.DROP,
        name: venue.venue.name
      })
      this.state.markers.push(marker)
      //add animation to a marker when it's clicked
      marker.addListener('click', () => {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
          } else {
            //start animation
            marker.setAnimation(window.google.maps.Animation.BOUNCE);
            //stop animation
            setTimeout(() => {marker.setAnimation(null)},1500);
          }
          //set content for info window based on clicked marker
          infowindow.setContent(contentString)
          infowindow.open(map, marker);
        }) // end addListener for Animation

      }) //end create the markers
    } //end initMap


    filterVenues = (query) => {
       this.setState({query: query});
       // console.log (this.state.query)
       //console.log (this.state.markers)
       this.state.markers.forEach(marker =>{
       if (marker.name.toLowerCase().includes(query.toLowerCase()) == true){
          marker.setVisible(true)
        } else {
            marker.setVisible(false);
          }
       })
     }

  render() {
    return (
      <main>
        <Map />
        <div id="sidebar">
          <input
              type="text"
              placeholder="Filter restaurants..."
              value = {this.state.query}
              onChange = {(event) => this.filterVenues(event.target.value)}
            />
        </div>
      </main>
    )
  } // end render
} //end App



export default App;
