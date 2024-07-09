import React, { useState } from 'react';
import MapBox from '../components/MapBox';
import Aspects from '../components/main/aspects';
import { GeoObject } from '../models/geoObject';
import { geoObjects, getGeoObjects } from '../data/geoObjectsData';
import { markers, getMarkerObjects } from '../data/markerData';

function Main() {
  const [filteredGeoObjects, setFilteredGeoObjects] = useState<GeoObject[]>(geoObjects);
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
    <div className="w-100 h-100 d-flex flex-column overflow-hidden">
      <Aspects onAspectChange={handleAspectChange} />
      <div className="flex-grow-1 d-flex overflow-hidden">
        <div className="h-100 flex-grow-1">
          <MapBox
            filteredGeoObjects={filteredGeoObjects}
            onAspectChange={handleAspectChange}
            selectedAspect={selectedAspect}
            points={false}
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
