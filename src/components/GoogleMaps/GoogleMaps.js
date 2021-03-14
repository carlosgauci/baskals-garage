// Google map component in the footer / get directions section

import React from "react"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "100%",
}

const center = {
  lat: 36.028993,
  lng: 14.281739,
}

const GoogleMaps = () => {
  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GOOGLE_MAPS_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker
          position={{ lat: center.lat, lng: center.lng }}
          opacity={0.75}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default GoogleMaps
