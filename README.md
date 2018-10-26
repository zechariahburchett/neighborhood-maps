## Neighborhood Map
This is the final project from Udacity's [Front End Web Development Nanodegree.](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) This project required me to create a responsive application built for use on desktop and mobile environments. The purpose of the application is to display a map with marker locations provided from a third party API. This application displays data using the foursquare api and google maps javascript api.

## Getting Started
To view this application clone it from this repository by running the following code in your terminal.
```
git clone https://github.com/zechariahburchett/neighborhood-maps.git
```
Once the repository has downloaded change directory to the project on your computer.
```
cd neighborhood-maps
```
After this, run the following code to launch the application.
```
npm install
npm start
```

## Built With
[Create React App](https://github.com/facebook/create-react-app)
[Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)
[Foursquare Places API](https://developer.foursquare.com/docs/api)

## Offline Use
There is a service worker provided within this application that was created by Create React App. This project is the development version of the application and thus the service worker provided will not run when you start this version of the application. To use the Create React App provided service worker you will be required to build the application. See [Create React App](https://github.com/facebook/create-react-app) for details on building the application with Create React App.
