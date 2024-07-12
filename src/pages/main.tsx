import React, { useContext, useState } from 'react';
import MapBox from '../components/MapBox';
import Aspects from '../components/main/aspects';
import { GeoObject } from '../models/geoObject';
import { geoObjects, getGeoObjects } from '../data/geoObjectsData';
import { markers, getMarkerObjects } from '../data/markerData';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { SidebarContext } from '../context/SidebarContext';
import Sidebar from '../components/main/sidebar/sidebar';
import { useAppSelector } from "../hooks";

function Main() {
  //aspects//
  const editor = useAppSelector((x) => x.editor);
  //editor.geoObject=[];
  const fullGeoObjects = editor.geoObject.concat(getGeoObjects());
  //const fullGeoObjects = getGeoObjects();
  const [filteredGeoObjects, setFilteredGeoObjects] = useState<GeoObject[]>(fullGeoObjects);
  const [selectedAspect, setSelectedAspect] = useState<string | null>(null);

  const handleAspectChange = (aspect: string | null) => {
    setSelectedAspect(aspect);
    if (aspect) {
      setFilteredGeoObjects(fullGeoObjects.filter(geoObject => geoObject.type === aspect));
    } else {
      setFilteredGeoObjects(fullGeoObjects);
    }
  };

  //all
  const onAll =() =>{
    setFilteredGeoObjects(fullGeoObjects);
    setSelectedAspect(null)
  }
 //aspects end//

  //SIDEBAR
  const selectedGeoObjectId = useSelector((state: RootState) => state.selectedGeoObject.selectedGeoObjectId);
  const selectedGeoObject = fullGeoObjects.find((geoObject) => geoObject.id === selectedGeoObjectId);
  const { isSidebarOpen, handleOpenSidebar, handleCloseSidebar } = useContext(SidebarContext);
  //SIDEBAR end



  return (
    <div className="w-100 h-100 d-flex flex-column overflow-hidden">
      <Aspects selectedAspect={selectedAspect} onAspectChange={handleAspectChange} onAll={onAll} />
    
      <div className="flex-grow-1 d-flex overflow-hidden">
      <div className="h-100">
        {selectedGeoObject && (
          <Sidebar onClose={handleCloseSidebar} selectedObject={selectedGeoObject} isOpen={isSidebarOpen} />
        )}
      </div>
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
