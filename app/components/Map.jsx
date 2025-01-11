"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Pin from "leaflet/dist/images/marker-icon.png";
import locations from "../data/locations.json"; // Import the JSON file directly

import "../styles/MapStyles.css";

// Custom marker icon
const customIcon = L.icon({
  iconUrl: Pin.src,
  iconSize: [20, 32],
  iconAnchor: [16, 32], // Anchor point
});

const Map = () => {
  return (
    <div className="map-section" id="map">
      <div className="another">
        <div className="map-header my-5">
          <h2>Που θα βρείτε τα προϊόντα μας</h2>
        </div>
        <div className="map-container">
          <MapContainer
            center={[39.73280889159768, 22.081154323190123]}
            zoom={9}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={[location.lat, location.lng]}
                icon={customIcon}
              >
                <Popup>{location.name}</Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default Map;
