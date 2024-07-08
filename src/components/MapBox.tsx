import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { MapPoints } from "./MapPoints";
import { MapPolygons } from "./MapPolygons";
import { MapService } from "./MapService";
import { RenderPolygons } from "./RenderPolygons";
import { RenderMarkers } from "./RenderMarkers";
import { useAppSelector } from "../hooks";
import { getGeoObjects } from "../data/geoObjectsData";
import { getMarkerObjects, markers } from "../data/markerData";

interface MapBoxProps {
  points?: boolean;
}

export const MapBox = ({points}:MapBoxProps) => {
  const editor = useAppSelector((x) => x.editor);
  const geoObjects = getGeoObjects(); // Добавляет все полигоны из /data/geoObjectsData.ts

  return (
    <MapContainer
	style={{ height: '85vh', width: '100%' }}
      
      center={[59.939, 30.316]}
      zoom={15}
      scrollWheelZoom={true}
    >
      <MapService />

      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      { points === true ?  <MapPoints /> : null  }
  

      {editor.isPolygonsVisible && <RenderPolygons geoObjects={geoObjects} />} 
      {<RenderMarkers markers={markers}/>}
    </MapContainer>
  );
};
