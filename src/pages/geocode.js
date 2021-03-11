// import React from 'react'
// import Geocode from "react-geocode";

// // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
// Geocode.setApiKey("AIzaSyBSTsgljn4LbLaDtwdSLmoehWMHGpQZubs");

// // set response language. Defaults to english.
// Geocode.setLanguage("en");


// // Get address from latitude & longitude.
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   (response) => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

// // Get formatted address, city, state, country from latitude & longitude when
// // Geocode.setLocationType("ROOFTOP") enabled
// // the below parser will work for most of the countries
// Geocode.fromLatLng("48.8583701", "2.2922926").then(
//   (response) => {
//     const address = response.results[0].formatted_address;
//     let city, state, country;
//     for (let i = 0; i < response.results[0].address_components.length; i++) {
//       for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
//         switch (response.results[0].address_components[i].types[j]) {
//           case "locality":
//             city = response.results[0].address_components[i].long_name;
//             break;
//           case "administrative_area_level_1":
//             state = response.results[0].address_components[i].long_name;
//             break;
//           case "country":
//             country = response.results[0].address_components[i].long_name;
//             break;
//         }
//       }
//     }
//     console.log(city, state, country);
//     console.log(address);
//   },
//   (error) => {
//     console.error(error);
//   }
// );

// // Get latitude & longitude from address.
 
// Geocode.fromAddress(userInput).then(
//   (response) => {
//     const { lat, lng } = response.results[0].geometry.location;
//     console.log(lat, lng);
//   },
//   (error) => {
//     console.error(error);
//   }
// );