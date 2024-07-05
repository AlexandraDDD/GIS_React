import { FC } from "react";
import { Polygon as LeafletPolygon, Popup } from "react-leaflet";
import { Polygon } from "../models/polygon";
import { GeoObject } from "../models/geoObject";

interface Props {
  geoObjects: GeoObject[];
}

// отрисовка полигона GeoObject
export const RenderPolygons: FC<Props> = ({ geoObjects }) => {
  const polygonElements = geoObjects.map((geoObject) => (
    <LeafletPolygon
      key={geoObject.id}
      positions={geoObject.polygon.points.map((point) => point.coordinates)}
      color={getColor(geoObject.polygon)}
      fillColor={getColor(geoObject.polygon)}
      fillOpacity={0.5}
    >
      <Popup>{geoObject.name}</Popup> 
    </LeafletPolygon> 
  ));

  return <>{polygonElements}</>;
};

const getColor = (polygon: Polygon) => {
  // Здесь вы можете реализовать логику выбора цвета для полигона
  // Например, в зависимости от свойств полигона или его id
  // В этом примере используется простой массив цветов
  const colors = ["red", "green", "blue", "yellow", "purple"];
  return colors[polygon.id.charCodeAt(0) % colors.length];
};
