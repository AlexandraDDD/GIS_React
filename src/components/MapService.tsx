import { FC, useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { MapPoints } from "./MapPoints";
import { AdminPolygons } from "./AdminPolygons";
import { BuildingPolygons } from "./BuildingPolygons";
import { useAppSelector } from "../hooks";
import { getGeoObjects } from "../data/geoObjectsData";
import { useMap } from "react-leaflet";
import { Map } from "leaflet";

let instance: Map | undefined;

export const MapService: FC = () => {
  const editor = useAppSelector((x) => x.editor);
  const geoObjects = getGeoObjects();
  const [selectedAspect, setSelectedAspect] = useState<string | null>(null);
  const map = useMap();

  const handleAspectChange = (aspect: string | null) => {
    setSelectedAspect(aspect);
  };

  useEffect(() => {
    console.log("set map");
    instance = map;
  }, []);

  return (
    <MapContainer
      style={{ height: '90vh', width: '100%' }}
      center={[59.939, 30.316]}
      zoom={13}
      scrollWheelZoom={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <MapPoints />

      {editor.isPolygonsVisible && (
        <>
          <AdminPolygons geoObjects={geoObjects} selectedAspect={selectedAspect} onAspectChange={handleAspectChange} />
          <BuildingPolygons geoObjects={geoObjects} selectedAspect={selectedAspect} onAspectChange={handleAspectChange} />
        </>
      )}
    </MapContainer>
  );
};

export const useAppMap = (): Map | undefined => {
  return instance;
};
