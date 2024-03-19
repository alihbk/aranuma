 import { useEffect, useMemo, useRef, useState } from "react";
 import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
 import "leaflet/dist/leaflet.css";

interface Props {
   location?: { lat: number; lng: number };
  }

const CustomMap = (props: Props) => {
  const center: [number, number] = [51.505, -0.09];
  const zoom: number = 13;

 
 
  return (

    <MapContainer center={center} zoom={zoom} style={{ height: '400px', width: '100%' }} >
    <TileLayer
    
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    />
    <Marker position={[51.505, -0.09]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>

 
  );
};

export default CustomMap;
