import React from 'react'
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { Marker } from 'react-leaflet/Marker'
import { Popup } from 'react-leaflet/Popup'
function Location() {
  return (
    <div className="location" id="location">
      <h2 className="title">our Location</h2>
      <div className="map-wrap" data-aos="slide-right" data-aos-duration="1500">
        <MapContainer center={[15.6108516, 32.5276919]} zoom={14}>
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={[15.6108516, 32.5276919]}>
            <Popup>come say hi</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  )
}

export default Location