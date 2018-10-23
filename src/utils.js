/*Code borrowed from Ryan Waite - Udacity Project Coach
  YouTube video https://www.youtube.com/watch?v=5J6fs_BlVC0&t=1259s
  GitHub source https://github.com/ryanwaite28/script-store/blob/master/js/react_resolve_google_maps.js
*/
export function load_google_maps () {
  return new Promise(function(resolve, reject) {
    // define the global callback that will run when google maps is loaded
    window.resolveGoogleMapsPromise = function() {
      // resolve the google object
      resolve(window.google);
      // delete the global callback to tidy up since it is no longer needed
      delete window.resolveGoogleMapsPromise;
    }
    // Now, Load the Google Maps API
    const script = document.createElement("script");
    const API_KEY = 'AIzaSyDPymC8Nt9d0RojKQI1wLxuSMXjnFBBAg4';
    script.src = `https://maps.googleapis.com/maps/api/js?libraries=places&key=${API_KEY}&callback=resolveGoogleMapsPromise`;
    script.async = true;
    document.body.appendChild(script);
  });
}
//End borrowed code

//load foursquare api
export function load_foursquare () {
  return fetch('https://api.foursquare.com/v2/venues/explore?near=Dayton&client_id=HFW1HIKPJVYEIJ0TE4PPGCXF4N32WMFVHY5J1V2DKGQZXWVV&client_secret=QABWCB4XCHBTLZSJ5ZO1IZDXSMNENTVSQDWZIC1GG2HTXDE0&v=20182507&query=food')
    .then(response => {
        return response.json()
    })
    .catch(error => {
      console.log("ERROR! " + error)
    })
  }
