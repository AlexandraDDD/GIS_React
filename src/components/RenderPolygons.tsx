import { FC } from "react";
import { Polygon as LeafletPolygon, Popup } from "react-leaflet";
import { Polygon } from "../models/polygon";
import { GeoObject } from "../models/geoObject";
import { geoObjects } from "../data/geoObjectsData";

interface Props {
  geoObjects: GeoObject[];
}

// отрисовка полигона GeoObject
export const RenderPolygons: FC<Props> = ({ geoObjects }) => {
  const polygonElements = geoObjects.map((geoObject) => (
    <LeafletPolygon
      key={geoObject.id}
      positions={geoObject.polygon.points.map((point) => point.coordinates)}
      color={getColor(geoObject)}
      fillColor={getColor(geoObject)}
      fillOpacity={0.5}
    >
      <Popup>{geoObject.name}</Popup> 
    </LeafletPolygon> 
  ));

  return <>{polygonElements}</>;
};

const getColor = (geoObject: GeoObject) => {
  const colorsAdm = ["red", "brown", "pink", "magenta", "purple"];
  const colorsBldg = ["orange", "green", "blue", "yellow", "lime"];

  if (geoObject.type === "ADM") {
    return colorsAdm[geoObject.id % colorsAdm.length];
  }

  if (geoObject.type === "BLDG") {
    return colorsBldg[geoObject.id % colorsBldg.length];
  }

  // Можно добавить дополнительные условия для других типов объектов
  return "gray";
} 