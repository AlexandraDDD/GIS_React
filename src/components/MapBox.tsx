import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer } from "react-leaflet";
import { RenderPolygons } from "./RenderPolygons";
import { useAppSelector } from "../hooks";
import { getGeoObjects } from "../data/geoObjectsData";
import { GeoObject } from "../models/geoObject";

interface MapBoxProps {
  filteredGeoObjects: GeoObject[];
}

const MapBox: React.FC<MapBoxProps> = ({ filteredGeoObjects }) => {
  const editor = useAppSelector((x) => x.editor);

  return (
    <MapContainer
      style={{ height: '90vh', width: '100%' }}
      center={[59.939, 30.316]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {editor.isPolygonsVisible && (
        <RenderPolygons geoObjects={filteredGeoObjects} />
      )}
    </MapContainer>
  );
};

export default MapBox;
