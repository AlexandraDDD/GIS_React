import React, { useContext, useState } from 'react'
import { CommandBar } from '../components/CommandBar'
import { Properties } from '../components/Properties'
import { MapBox } from '../components/MapBox'
import Aspects from '../components/main/aspects'
import Sidebar from '../components/main/sidebar'
import { useSelector } from 'react-redux'
import { getGeoObjects } from '../data/geoObjectsData'
import { RootState } from '../store'
import { SidebarContext } from '../context/SidebarContext'



function Main() {
  const geoObjects = getGeoObjects();
  const selectedGeoObjectId = useSelector((state: RootState) => state.selectedGeoObject.selectedGeoObjectId);
  const selectedGeoObject = geoObjects.find((geoObject) => geoObject.id === selectedGeoObjectId);

  const { isSidebarOpen, handleOpenSidebar, handleCloseSidebar } = useContext(SidebarContext);





  return <div className="w-100 h-100 d-flex flex-column overflow-hidden">


   

    <Aspects></Aspects>
    <div className="flex-grow-1 d-flex overflow-hidden">
      <div className="h-100">
        {selectedGeoObject && (
          <Sidebar onClose={handleCloseSidebar} selectedObject={selectedGeoObject} isOpen={isSidebarOpen} />
        )}
      </div>
      <div className="h-100 flex-grow-1">
        <MapBox points={false} />
      </div>
    </div>
  </div>

}

export default Main