import { FC } from "react";
import { Polygon as LeafletPolygon, Popup } from "react-leaflet";
import { GeoObject } from "../models/geoObject";

interface Props {
  geoObjects: GeoObject[];
  selectedAspect: string | null;
  onAspectChange: (aspect: string | null) => void;
}

export const BuildingPolygons: FC<Props> = ({ geoObjects, selectedAspect, onAspectChange }) => {
  const polygonElements = geoObjects
    .filter((geoObject) => selectedAspect === null || geoObject.type === selectedAspect)
    .filter((geoObject) => geoObject.type === "BLDG")
    .map((geoObject) => (
      <LeafletPolygon
        key={geoObject.id}
        positions={geoObject.polygon.points.map((point) => point.coordinates)}
        color="blue"
        fillColor="blue"
        fillOpacity={0.5}
      >
        <Popup>{geoObject.name}</Popup>
      </LeafletPolygon>
    ));

  return <>{polygonElements}</>;
};