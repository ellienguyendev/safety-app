import React, { useState } from 'react'

import Button from '../components/button'
import Event from '../components/event'
import Geocode from "react-geocode";
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Map from './map'
import { withGoogleMap, withScriptjs } from 'react-google-maps'

const MapComponent = withScriptjs(withGoogleMap(Map));
Geocode.setApiKey("AIzaSyBSTsgljn4LbLaDtwdSLmoehWMHGpQZubs");

const App = ({data}) => {
  const mongoData = data.allMongodbSafetyAppEvents.edges
  const [mapData, setMapData] = useState(null)
  const [isLoading, setLoading] = useState(true);
  const [userSearchInput, setUserSearchInput] = useState('')
  const [coordinates, setCoordinates] = useState(null)
  const [matchingStates, setMatchingStates] = useState(null)
  

    const handleInputChange = event => {
      let value = event.target.value
      setUserSearchInput(value)
      console.log(userSearchInput);
    }

    const handleSearchSubmit = e => {
      e.preventDefault();
      Geocode.fromAddress(userSearchInput).then(
          (res) => {
            const { lat, lng } = res.results[0].geometry.location;
            setCoordinates([lat,lng])

            Geocode.fromLatLng(lat, lng).then(
              (response) => {
                let state
                for (let i = 0; i < response.results[0].address_components.length; i++) {
                  for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                    switch (response.results[0].address_components[i].types[j]) {
                      case "administrative_area_level_1":
                        state = response.results[0].address_components[i].short_name;
                        break;
                    }
                  }
                }
                setMatchingStates(mongoData.filter((incident => incident.node.state === state)))
                setLoading(false)
              })
          },
          (error) => {
            console.error(error);
          }
        )
    }

  if (isLoading) {
    return(
      <Layout>
        <form>
            <label>
              Search an Address or City
              <br />
              <input
                class="border"
                style={{ border: '1px solid purple' }}
                type="text"
                name="location"
                value={userSearchInput}
                onChange={handleInputChange}
              />
            </label>
            <Button 
                handleClick={handleSearchSubmit}
                text='Submit'
            />
          </form>
      </Layout>
    )
  } else {
    return (
      <Layout>
  
        <div className="flex mb-4">
  
          <div className="w-1/2 mb-4 ml-2 mr-2 shadow-lg " >
  
            <div style={{ width: "100%", height: "100vh" }} >
        
              <MapComponent
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBSTsgljn4LbLaDtwdSLmoehWMHGpQZubs&v=3.exp&libraries=geometry,drawing,places`}  
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `100%` }} />}
                mapElement={<div style={{ height: `100%` }} />}
                setMapData={setMapData}
                coordinates ={coordinates}
                mongoData={mongoData}
                defaultZoom={10}
              />
  
            </div>
          </div>
  
          <div className='w-1/2' >
            <div className='flex flex-wrap'>
              {matchingStates.length > 0 ? matchingStates.map(incident => (
                <Event 
                  imgLink ={incident.node.images[0]}
                  headline ={incident.node.headline}
                  description ={incident.node.description}
                  date ={incident.node.date}
                  time ={incident.node.time}
                  city ={incident.node.city}
                  state ={incident.node.state}
                  category ={incident.node.category}
                  source ={incident.node.source}
                  actions ={incident.node.actions}
                  type ={incident.node.type}
                />
              )) : <p>No reportings for your location yet. Please feel empowered to add some.</p>}
            </div>
          </div>
        </div>
      </Layout>
    )
  }

  
}

export const query = graphql`
query {
  allMongodbSafetyAppEvents {
    edges {
      node {
        id
        images
        headline
        description
        date
        time
        city
        state
        category
        source
        actions
        type
        coordinates
      }
    }
  }
}
`

export default App
