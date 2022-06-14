import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function CustomMap() {
  const position = [51.505, -0.09];
  return (
    <div style={{ flex: 1 }}>
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution="https://api.maptiler.com/maps/basic/?key=fZsMRqUveJFcUMUyFLAF#-0.2/-1.18363/-42.57596"
          url="https://api.maptiler.com/maps/basic/?key=fZsMRqUveJFcUMUyFLAF#-0.2/-1.18363/-42.57596"
        />
      </MapContainer>
    </div>
  );
}

export default CustomMap;
