import React, { useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import districts from '../../data/districts';

// Component to control map fly
const MapFlyTo = ({ position }) => {
  const map = useMap();
  if (position) {
    map.flyTo(position, 10, { duration: 1.5 });
  }
  return null;
};

const Coverage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [targetPosition, setTargetPosition] = useState(null);
  const markerRefs = useRef({});

  const handleSearch = () => {
    const found = districts.find(d =>
      d.district.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (found) {
      setTargetPosition([found.latitude, found.longitude]);

      // Delay to allow flyTo animation, then open popup
      setTimeout(() => {
        const marker = markerRefs.current[found.district];
        if (marker) {
          marker.openPopup();
        }
      }, 1000);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2B8282] mb-8">
        We are available in 64 districts.
      </h2>

      {/* Search box */}
      <div className="flex justify-center mb-8 gap-2">
        <input
          type="text"
          placeholder="Search district..."
          className="input input-bordered rounded-full w-full max-w-md"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button className="btn btn-primary rounded-full text-black" onClick={handleSearch}>
          Search
        </button>
      </div>

      {/* Map */}
      <div className="w-[70%] h-[500px] rounded-xl mx-auto overflow-hidden shadow-lg">
        <MapContainer
          center={[23.685, 90.356]}
          zoom={7}
          scrollWheelZoom={true}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
          />

          {/* Fly to searched district */}
          <MapFlyTo position={targetPosition} />

          {/* Markers */}
          {districts.map((district, idx) => (
            <Marker
              key={idx}
              position={[district.latitude, district.longitude]}
              ref={(ref) => (markerRefs.current[district.district] = ref)}
            >
              <Popup>
                <div className="text-sm">
                  <h3 className="font-bold text-lg">{district.district}</h3>
                  <p><span className="font-medium">Areas:</span> {district.covered_area.join(', ')}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
