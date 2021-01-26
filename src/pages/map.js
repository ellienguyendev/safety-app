import React, { useState } from "react"
import { GoogleMap, Marker, InfoWindow, SearchBox } from "react-google-maps"
import * as Data from "../json/data.json"

const Map = props => {
  const [icon, setIcon] = useState(null)
  const [infoWindow, setInfoWindow] = useState(null)

  const iconChange = data => {
    if (icon && data.id == icon.id) {
      return "icons/hover-pin.png"
    } else {
      if (data.type === "incident") {
        return "icons/red-pin.png"
      } else {
        return "icons/blue-pin.png"
      }
    }
  }

  return (
    <div>
      <GoogleMap
        defaultZoom={10}
        defaultCenter={{
          lat: props.coordinates[0],
          lng: props.coordinates[1],
        }}
      >
        {Data.events.map(Data => (
          <Marker
            key={Data.id}
            icon={{
              url: iconChange(Data),
              scaleSize: new window.google.maps.Size(25, 25),
            }}
            onMouseOver={() => {
              setIcon(Data)
              setInfoWindow(Data)
            }}
            onClick={() => {
              props.setmodal(true)
              props.setData(Data)
            }}
            position={{
              lat: Data.coordinates[0],
              lng: Data.coordinates[1],
            }}
          />
        ))}
        {infoWindow ? (
          <InfoWindow
            key={infoWindow.id}
            position={{
              lat: infoWindow.coordinates[0] + 0.01,
              lng: infoWindow.coordinates[1] + 0.01,
            }}
            onCloseClick={() => setInfoWindow(null)}
          >
            <div>
              <img
                className="w-15 h-12 mb-2"
                src={infoWindow.images[0]}
                style={{ width: "100px", height: "100px" }}
              />
              <h2 className="text-sm mb-3" style={{ fontFamily: "coustard" }}>
                {infoWindow.name}
              </h2>
              <p className="text-sm" style={{ fontFamily: "Gentium Basic" }}>
                {infoWindow.description}
              </p>
            </div>
          </InfoWindow>
        ) : null}
      </GoogleMap>

      
    </div>
  )
}

export default Map
