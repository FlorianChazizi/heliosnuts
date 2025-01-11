'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Pin from 'leaflet/dist/images/marker-icon.png';

import '../styles/MapStyles.css';


const customIcon = L.icon({
  iconUrl: Pin.src,
  iconSize: [20, 32],
  iconAnchor: [16, 32], // Anchor point
});

const Map = () => {
  // Array of locations
  const locations = [
    { id: 1, lat: 39.55656, lng: 21.76983, name: '28ης Οκτωβρίου 41, Τρίκαλα 421 00' },
    { id: 2, lat: 39.55021, lng: 21.76585, name: 'Ασκληπιού 32, Τρίκαλα 421 00' },
    { id: 3, lat: 39.55091, lng: 21.76836, name: 'Φλέμινγκ 21, Τρίκαλα 421 00' },
    { id: 4, lat: 39.42803, lng: 21.67456, name: 'Μιχαήλ Κεντρικά' },
    { id: 5, lat: 39.42883, lng: 21.66495, name: 'Μιχαήλ Μουζάκι' },
    { id: 6, lat: 39.36930, lng: 21.92484, name: 'Ανδρέα Παπανδρέου 61, Καρδίτσα 431 00' },
    { id: 7, lat: 39.36676, lng: 21.92196, name: 'Κολοκοτρώνη 13, Καρδίτσα 431 00' },


  ];

  return (
    <div className='map-section'>

      <div className='another'>
      <div className="map-header my-5">
          <h2>Που θα βρείτε τα προϊόντα μας</h2>
        </div>
        <div className="map-container">
          <MapContainer center={[39.73280889159768, 22.081154323190123]} zoom={9} style={{ height: '100%', width: '100%' }}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            {locations.map((location) => (
              <Marker key={location.id} position={[location.lat, location.lng]} icon={customIcon}>
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
