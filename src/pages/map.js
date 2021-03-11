import React, { useState } from "react"
import { GoogleMap, Marker, InfoWindow } from "react-google-maps"

const Map = props => {
  const [icon, setIcon] = useState(null)
  const [infoWindow, setInfoWindow] = useState(null)

  const iconChange = event => {
    if (icon && event.id == icon.id) {
      return "icons/hover-pin.png"
    } else {
      if (event.type === "incident") {
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
        {props.mongoData.map(event => (
          <Marker
            key={event.node.id}
            icon={{
              url: iconChange(event.node),
              scaleSize: new window.google.maps.Size(20, 20),
            }}
            onMouseOver={() => {
              setIcon(event.node)
              setInfoWindow(event.node)
            }}
            onClick={() => {
              props.setmodal(true)
              props.setMapData(event.node)
            }}
            position={{
              lat: event.node.coordinates[0],
              lng: event.node.coordinates[1],
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
                style={{ width: "200px", height: "100px" }}
              />
              <h2 className="text-sm mb-3" style={{ fontFamily: "Gentium Basic" }}>
                {`${infoWindow.headline} | ${infoWindow.date}`}
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
