import { FC, useState } from "react";
import { Polygon as LeafletPolygon, Popup } from "react-leaflet";
import { GeoObject } from "../models/geoObject";
import Aspects from "./main/aspects";

interface Props {
  geoObjects: GeoObject[];
}

// отрисовка полигона GeoObject
export const RenderPolygons: FC<Props> = ({ geoObjects }) => {
  const [selectedAspect, setSelectedAspect] = useState<string | null>(null);

  const handleAspectChange = (aspect: string | null) => {
    setSelectedAspect(aspect);
  };

  const filteredGeoObjects = selectedAspect
    ? geoObjects.filter(geoObject => geoObject.type === selectedAspect)
    : geoObjects;

  return (
    <>
      <Aspects onAspectChange={handleAspectChange} />
      {filteredGeoObjects.map((geoObject) => (
        <LeafletPolygon
          key={geoObject.id}
          positions={geoObject.polygon.points.map((point) => point.coordinates)}
          color={getColor(geoObject)}
          fillColor={getColor(geoObject)}
          fillOpacity={0.5}
        >
          <Popup>{geoObject.name}</Popup>
        </LeafletPolygon>
      ))}
    </>
  );
};

const getColor = (geoObject: GeoObject) => {
  const colorsAdm = ["red", "brown", "pink", "magenta", "purple"];
  const colorsBldg = ["orange", "green", "blue", "yellow", "lime"];

  if (geoObject.type === "ADM") {
    return colorsAdm[geoObject.id % colorsAdm.length];
  } else if (geoObject.type === "BLDG") {
    return colorsBldg[geoObject.id % colorsBldg.length];
  }

  // Можно добавить дополнительные условия для других типов объектов
  return "gray";
};
