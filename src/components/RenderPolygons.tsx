import { FC } from "react";
import { Polygon as LeafletPolygon, Popup } from "react-leaflet";
import { Polygon } from "../models/polygon";

interface Props {
  polygons: Polygon[];
}

export const RenderPolygons: FC<Props> = ({ polygons }) => {
  const polygonElements = polygons.map((polygon) => (
    <LeafletPolygon
      key={polygon.id}
      positions={polygon.points.map((point) => point.coordinates)}
      color={getColor(polygon)}
      fillColor={getColor(polygon)}
      fillOpacity={0.5}
    >
      <Popup>{polygon.id}</Popup>
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
