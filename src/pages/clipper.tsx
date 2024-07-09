import React, { useState } from 'react';
import MapBox from '../components/MapBox';
import { GeoObject } from '../models/geoObject';
import { geoObjects, getGeoObjects } from '../data/geoObjectsData';
import { markers, getMarkerObjects } from '../data/markerData';
import { Button, Container, Navbar } from 'react-bootstrap';
import { CommandBar } from '../components/CommandBar';
import { Properties } from '../components/Properties';

function Clipper() {
  const [filteredGeoObjects, setFilteredGeoObjects] = useState<GeoObject[]>([]);
  const [selectedAspect, setSelectedAspect] = useState<string | null>(null);

  const handleAspectChange = (aspect: string | null) => {
    setSelectedAspect(aspect);
    if (aspect) {
      setFilteredGeoObjects(geoObjects.filter(geoObject => geoObject.type === aspect));
    } else {
      setFilteredGeoObjects(geoObjects);
    }
  };

  return (
    
    <div className="w-100 h-100 d-flex flex-column">
      <CommandBar />
      <div className="flex-grow-1 d-flex overflow-hidden">
        <div className="h-100">
          <Properties />
        </div>
        <div className="h-100 flex-grow-1">
          <MapBox
            filteredGeoObjects={filteredGeoObjects}
            onAspectChange={handleAspectChange}
            selectedAspect={selectedAspect}
            points={true}
          />
        </div>
      </div>
    </div>
  );
}

export default Clipper;
