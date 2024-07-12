import React, { useState } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { RenderPolygons } from "./RenderPolygons";
import { RenderMarkers } from "./RenderMarkers";
import { useAppSelector } from "../hooks";
import { getGeoObjects } from "../data/geoObjectsData";
import { getMarkerObjects, markers } from "../data/markerData";
import { GeoObject } from "../models/geoObject";
import { MapPoints } from './MapPoints';
import { MapPolygons } from './MapPolygons';

interface MapBoxProps {
  filteredGeoObjects: GeoObject[];
  onAspectChange: (aspect: string | null) => void;
  selectedAspect: string | null;
  points?: boolean;
}

const MapBox: React.FC<MapBoxProps> = ({
  filteredGeoObjects,
  onAspectChange,
  selectedAspect,
  points,
}) => {
  const editor = useAppSelector((x) => x.editor);

  return (
    <MapContainer
      style={{ height: '81vh', width: '100%' }}
      center={[59.939, 30.316]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {points === true ?
       <>
         {editor.isPolygonsVisible && <MapPolygons />}
         <MapPoints />
      </>  : null}
      {editor.isPolygonsVisible && (
        <>
        <RenderPolygons
          geoObjects={filteredGeoObjects}/>
          
          <RenderMarkers markers={markers} selectedAspect={selectedAspect} /></>
      )}

    </MapContainer>
  );
};

export default MapBox;
