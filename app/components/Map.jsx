'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix the default icon issue in Leaflet
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], // Size of the icon
  iconAnchor: [12, 41], // Position the icon properly
});

const customIcon = L.icon({
    iconUrl: '../assets/pin.png',
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });

L.Marker.prototype.options.icon = customIcon;

const Map = () => {
  // Array of locations
  const locations = [
    { id: 1, lat: 39.640063, lng: 22.419125, name: 'Larissa' },
    { id: 2, lat: 37.98381, lng: 23.727539, name: 'Athens' },
    { id: 3, lat: 40.640064, lng: 22.94442, name: 'Thessaloniki' },
    { id: 4, lat: 39.42803058616459, lng: 21.674558456321396, name: 'Μιχαήλ Κεντρικά'}
  ];

  return (
    <div style={{ height: '80vh', width: '100%' }}>
      <MapContainer center={[39.640063, 22.419125]} zoom={7} style={{ height: '100%', width: '100%' }}>
        {/* Add a tile layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Render Markers */}
        {locations.map((location) => (
          <Marker key={location.id} position={[location.lat, location.lng]}>
            <Popup>{location.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default Map;
