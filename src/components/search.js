// import React, { useState } from "react"
// import Button from '../components/button'
// import Geocode from "react-geocode";

// const Search = () => {
//     const [location, setLocation] = useState('')
//     const [coordinates, setCoordinates] = useState(null)


//       const handleInputChange = event => {
//         let value = event.target.value
//         setLocation(value)
//       }

//       console.log(location)

//       const handleSearchSubmit = userInput => {
//         Geocode.fromAddress(userInput).then(
//             (response) => {
//               const { lat, lng } = response.results[0].geometry.location;
//               setCoordinates([lat,lng])
//             },
//             (error) => {
//               console.error(error);
//             }
//           )
//       }

      
//         return (
//           <form>
//             <label>
//               Search Address or City
//               <input
//                 type="text"
//                 name="location"
//                 value={location}
//                 onChange={handleInputChange}
//               />
//             </label>
//             <Button 
//                 handleClick={handleSearchSubmit(location)}
//                 text='Submit'
//             />
//           </form>
//         )
// }

// export default Search
