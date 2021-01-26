import React, { useState } from 'react'

import Button from '../components/button'
import Event from '../components/event'
import Layout from '../components/layout'
import Map from './map'
import Modal from 'react-responsive-modal'
import { withGoogleMap, withScriptjs } from 'react-google-maps'
import * as Data from '../json/data.json'

const MapComponent = withScriptjs(withGoogleMap(Map));

const App = () => {

  const [modal, setmodal] = useState(false);
  const [data, setData] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  const [isLoading, setLoading] = useState(true);

  const handleCurrentLocation = e => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const pos = [position.coords.latitude, position.coords.longitude]
        setCoordinates(pos)
        setLoading(false)
      }
    );
    console.log(coordinates);
  }

  if (isLoading) {
    return(
      <Layout>
        <Button
          handleClick={handleCurrentLocation}
          text='Fetch Current Location'
        />
      </Layout>
    )
  }

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
              setmodal={setmodal}
              setData={setData}
              coordinates ={coordinates}
              defaultZoom={10}
            />

{data ? <Modal
        open={modal}
        onClose={() => setmodal(false)}
      >
        <div className="flex">
          <div className="w-full">
            <img 
              src={data.images[0]} 
              style={{ width: '100px', height: '100px' }} />
          </div>
          <div className="w-full ml-3">
            <h1>{data.headline}</h1>
            <p>{data.description}</p>
          </div>
        </div>
      </Modal>
        : null}
          </div>
        </div>

        <div className='w-1/2' >
          <div className='flex flex-wrap'>
            {Data.events.map(event => (
              <Event 
                imgLink ={event.images[0]}
                headline ={event.headline}
                description ={event.description}
                date ={event.date}
                time ={event.time}
                city ={event.city}
                state ={event.state}
                category ={event.category}
                source ={event.source}
                actions ={event.actions}
                type ={event.type}
              />
            ))}
          </div>
        </div>
      </div>

    </Layout>
  )
}

export default App
